import { EntitySchema } from "typeorm";

export const Tag = new EntitySchema({
    name: 'tags',
    tableName: 'tags',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        title: {
            type: 'text',
            nullable: false,
            default: 'untitled',
            type: 'text',
        },
    },
    rrelations: {
        paragraph: {
            target: 'paragraphs',
            type: 'manu-to-one',
        }
    }
})