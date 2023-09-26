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

  getDocumentWithParagraphsById(id) {
    try {
      return pgPool.getRepository(Document).findOne({
        relations: ["paragraphs", "paragraphs.tags"],
        where: { id },
      });
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  createDocument(newDocument) {
    try {
      return pgPool.getRepository(Document).insert(newDocument);
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
