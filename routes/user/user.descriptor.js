import { signInSchema, signUpSchema } from "./user.schemas";

export const userRouterDescriptor = {
  "/user/whoami": {
    get: {
      description: "Return user by access token from header",
    },
  },
  "/user/sign-in": {
    post: {
      description: "Auth user by email and password",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...signInSchema,
            },
          },
        },
      },
    },
  },
  "/user/sign-up": {
    post: {
      description: "Create user",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              ...signUpSchema,
            },
          },
        },
      },
    },
  },
};
