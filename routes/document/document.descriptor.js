import {
  createDocumentSchema,
  createParagraphSchema,
  createTagSchema,
  patchDocumentSchema,
  patchParagraphSchema,
} from "./document.schemas";

export const documentRouterDescriptor = {
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
    },
    get: {
      security: {
        bearerAuth: [],
      },
      tags: ["document"],
      description: "Read all documents",
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
    },
    patch: {
      security: {
        bearerAuth: [],
      },
      tags: ["document"],
      description: "Update document",
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
