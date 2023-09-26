import { EntitySchema } from "typeorm";

export const Paragraph = new EntitySchema({
  name: "paragraphs",
  tableName: "paragraphs",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
      nullable: false,
      default: "untitled",
      type: "text",
    },
    content: {
      type: "text",
      nullable: false,
      default: "untitled",
      type: "text",
    },
  },
  relations: {
    document: {
      target: "documents",
      type: "many-to-one",
      joinColumn: {
        name: "document_id",
      },
    },
    tags: {
      target: "tags",
      type: "one-to-many",
      inverseSide: "paragraph",
    },
  },
});
