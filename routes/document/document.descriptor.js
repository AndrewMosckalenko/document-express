import {
  createDocumentSchema,
  createParagraphSchema,
  createTagSchema,
  patchDocumentSchema,
  patchParagraphSchema,
} from "./document.schemas";

export const documentRouterDescriptor = {
  "/api/document/:id/copy": {
    post: {
      tags: ["document"],
      security: {
        bearerAuth: [],
      },
      description: "Create new document",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
    },
  },
  "/api/document": {
    post: {
      tags: ["document"],
      security: {
        bearerAuth: [],
      },
      description: "Create new document",
      requestBody: {
        content: {
          "application/x-www-form-urlencoded": {
            schema: { ...createDocumentSchema },
          },
        },
      },
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
    },
    get: {
      security: {
        bearerAuth: [],
      },
      tags: ["document"],
      description: "Read all documents",
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
    },
  },
  "/api/document/{:id}": {
    post: {
      security: {
        bearerAuth: [],
      },
      tags: ["paragraph"],
      description: "Create new paragraph",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/x-www-form-urlencoded": {
            schema: { ...createParagraphSchema },
          },
        },
      },
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
    },
    get: {
      security: {
        bearerAuth: [],
      },
      tags: ["document"],
      description: "Get document by id",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
    },
    patch: {
      security: {
        bearerAuth: [],
      },
      tags: ["document"],
      description: "Update document",
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/x-www-form-urlencoded": {
            schema: { ...patchDocumentSchema },
          },
        },
      },
    },
    delete: {
      security: {
        bearerAuth: [],
      },
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      tags: ["document"],
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
    },
  },
  "/api/document/paragraph/{:id}": {
    patch: {
      security: {
        bearerAuth: [],
      },
      tags: ["paragraph"],
      description: "Update paragraph",
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/x-www-form-urlencoded": {
            schema: { ...patchParagraphSchema },
          },
        },
      },
    },
    delete: {
      security: {
        bearerAuth: [],
      },
      tags: ["paragraph"],
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
    },
  },
  "/api/document/{:id}/tag": {
    post: {
      security: {
        bearerAuth: [],
      },
      tags: ["tag"],
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      description: "Create new tag",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/x-www-form-urlencoded": {
            schema: { ...createTagSchema },
          },
        },
      },
    },
    delete: {
      security: {
        bearerAuth: [],
      },
      responses: {
        200: {
          description: "Done",
        },
        default: {
          description: "Error message",
        },
      },
      tags: ["tag"],
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
    },
  },
};
