import { signInSchema, signUpSchema } from "./user.schemas";

export const userRouterDescriptor = {
  "/api/user/whoami": {
    get: {
      tags: ["user"],
      description: "Return user by access token from header",
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      security: {
        bearerAuth: [],
      },
    },
  },
  "/api/user/sign-in": {
    post: {
      tags: ["auth"],
      description: "Auth user by email and password",
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      requestBody: {
        content: {
          "application/x-www-form-urlencoded": {
            schema: {
              ...signInSchema,
            },
          },
        },
      },
    },
  },
  "/api/user/sign-up": {
    post: {
      tags: ["auth"],
      description: "Create user",
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      requestBody: {
        content: {
          "application/x-www-form-urlencoded": {
            schema: {
              ...signUpSchema,
            },
          },
        },
      },
    },
  },
};
