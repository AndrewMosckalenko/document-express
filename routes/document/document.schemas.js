import joi from "joi";
import j2s from "joi-to-swagger";

const createDocumentJoiSchema = joi.object().keys({
  name: joi.string().required(),
});

const createParagraphJoiSchema = joi.object().keys({
  name: joi.string().required(),
  content: joi.string().required(),
});

const createTagJoiSchema = joi.object().keys({
  title: joi.string().required(),
});

const patchDocumentJoiSchema = joi.object().keys({
  name: joi.string().required(),
});

const patchParagraphJoiSchema = joi.object().keys({
  name: joi.string().required(),
  content: joi.string().required(),
});

export const createDocumentSchema = j2s(createDocumentJoiSchema).swagger;
export const createParagraphSchema = j2s(createParagraphJoiSchema).swagger;
export const createTagSchema = j2s(createTagJoiSchema).swagger;
export const patchDocumentSchema = j2s(patchDocumentJoiSchema).swagger;
export const patchParagraphSchema = j2s(patchParagraphJoiSchema).swagger;
