import { pgPool } from "../db/postgres";
import { Paragraph } from "../entities";

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
