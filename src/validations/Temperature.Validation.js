import Joi from 'joi';

export const temperatureCreateValidation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    temperature: Joi.number().required(),
    location: Joi.array().items(Joi.number()).required()
  })
};
