import { pgPool } from "../db/postgres";
import { Tag } from "../entities";
import { HttpExceprtion } from "../errors";

export const tagService = {
  createTag(newTag) {
    try {
      return pgPool.getRepository(Tag).insert(newTag);
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  deleteTag(id) {
    try {
      return pgPool.getRepository(Tag).delete({ id });
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },
};
