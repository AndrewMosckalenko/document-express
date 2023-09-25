import { HttpExceprtion, NotAuthException } from "../errors";
import { userService } from "./user.service";

export const authService = {
  async signIn({ email, password }) {
    try {
      const user = await userService.getUserByEmail(email);
      if (user.password !== password) throw new NotAuthException();

      throw new NotAuthException();
    } catch (_) {
      throw new NotAuthException();
    }
  },

  signUp(newUser) {
    try {
      return userService.createUser(newUser);
    } catch (_) {
      throw new NotAuthException();
    }
  },
};
