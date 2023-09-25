import { pgPool } from "../db/postgres";
import { User } from "../entities";
import { HttpExceprtion } from "../errors";

// const userRepository = pgPool.getRepository(User);

export const userService = {
  getUserByEmail(email) {
    try {
      return pgPool.getRepository(User).findOneBy({ email });
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },

  createUser(newUser) {
    try {
      return pgPool.getRepository(User).insert(newUser);
    } catch (e) {
      throw new HttpExceprtion(e.message, 400);
    }
  },
};
