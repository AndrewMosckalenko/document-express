import joi from "joi";
import j2s from "joi-to-swagger";

const signInJoiSchema = joi.object().keys({
  email: joi.string().email(),
  password: joi.string().required(),
});

const signUpJoiSchema = joi.object().keys({
  name: joi.string().required(),
  email: joi.string().email(),
  password: joi.string().required(),
});

export const signInSchema = j2s(signInJoiSchema).swagger;
export const signUpSchema = j2s(signUpJoiSchema).swagger;
