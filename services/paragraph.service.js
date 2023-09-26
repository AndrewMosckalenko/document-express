import { pgPool } from "../db/postgres";
import { Paragraph } from "../entities";
import { tagService } from "./tag.service";

export const paragraphService = {
  getParagraph(id) {
    try {
      return pgPool.getRepository(Paragraph).findOneBy({ id });
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  },

  createParagraph(newParagraph) {
    try {
      return pgPool.getRepository(Paragraph).insert(newParagraph);
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  },

  async copyParagraph(originParagraph) {
    try {
      const newParagraph = await this.createParagraph(originParagraph);
      const newParagraphId = newParagraph.raw[0].id;
      const createTagPromises = originParagraph.tags.map((tag) =>
        tagService.createTag({ ...tag, paragraph: { id: newParagraphId } }),
      );

      return Promise.all(createTagPromises);
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  },

  updateParagraph(updatedParargraph) {
    try {
      return pgPool
        .getRepository(Paragraph)
        .update({ id: updatedParargraph.id }, updatedParargraph);
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  },

  deleteParagraph(id) {
    try {
      return pgPool.getRepository(Paragraph).delete({ id });
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  },
};
