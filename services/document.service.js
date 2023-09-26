import { pgPool } from "../db/postgres";
import { Document, Paragraph } from "../entities";
import { HttpExceprtion } from "../errors";
import { paragraphService } from "./paragraph.service";

export const documentService = {
  getDocuments() {
    try {
      return pgPool.getRepository(Document).find();
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  getDocumentById(id) {
    try {
      return pgPool.getRepository(Document).findOneBy({ id });
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  async getDocumentWithParagraphsById(id) {
    try {
      const document = await pgPool.getRepository(Document).findOne({
        relations: ["paragraphs", "paragraphs.tags"],
        where: { id },
      });

      document.paragraphs.sort((paragraph1, paragraph2) =>
        paragraph1.serial > paragraph2.serial ? 1 : -1,
      );
      return document;
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  async createDocument(newDocument, file) {
    try {
      const createdDocument = await pgPool
        .getRepository(Document)
        .insert(newDocument);
      const newDocumentId = createdDocument.raw[0].id;

      if (file) {
        const newParagraphs = file.data.toString().split("\n");
        newParagraphs.map((content, index) =>
          paragraphService.createParagraph({
            content,
            name: `paragraph-${index}`,
            document: newDocumentId,
            serial: index,
          }),
        );
      }

      return newDocument;
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  deleteDocument(id) {
    try {
      return pgPool.getRepository(Document).delete({ id });
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  updateDocument(updateDocument) {
    try {
      return pgPool
        .getRepository(Document)
        .update({ id: updateDocument.id }, updateDocument);
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  async copyDocument(id) {
    try {
      const originDocument = await this.getDocumentWithParagraphsById(id);

      const newDocument = await this.createDocument({
        ...originDocument,
        name: originDocument.name + "-copy",
      });
      const newDocumentId = newDocument.raw[0].id;

      const createParargraphPromises = originDocument.paragraphs.map(
        (paragraph) =>
          paragraphService.copyParagraph({
            ...paragraph,
            document: { id: newDocumentId },
          }),
      );

      return Promise.all(createParargraphPromises);
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },
};
