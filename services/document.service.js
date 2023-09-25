import { pgPool } from "../db/postgres";
import { Document } from "../entities";
import { HttpExceprtion } from "../errors";

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
      return pgPool.getRepository(Document).update({ id }, updateDocument);
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },
};
