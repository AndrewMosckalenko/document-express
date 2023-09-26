import {
  createDocumentSchema,
  createParagraphSchema,
  createTagSchema,
  patchDocumentSchema,
  patchParagraphSchema,
} from "./document.schemas";

export const documentRouterDescriptor = {
  "/document": {
    post: {
      description: "Create new document",
      requestBody: {
        content: {
          "application/json": {
            schema: { ...createDocumentSchema },
          },
        },
      },
    },
    get: {
      description: "Read all documents",
    },
  },
  "/document/{:id}": {
    post: {
      description: "Create new paragraph",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: { ...createParagraphSchema },
          },
        },
      },
    },
    get: {
      description: "Get document by id",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
    },
    patch: {
      description: "Update document",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: { ...patchDocumentSchema },
          },
        },
      },
    },
    delete: {
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
    },
  },
  "/document/paragraph/{:id}": {
    patch: {
      description: "Update paragraph",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: { ...patchParagraphSchema },
          },
        },
      },
    },
    delete: {
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
    },
  },
  "/document/{:id}/tag": {
    post: {
      description: "Create new tag",
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: { ...createTagSchema },
          },
        },
      },
    },
    delete: {
      parameters: [
        {
          name: "id",
          in: "path",
        },
      ],
    },
  },
};
