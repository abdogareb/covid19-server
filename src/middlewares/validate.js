import Joi from 'joi';
import pick from '../utils/pick.js';
import typify from '../utils/typify.js';

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  if (object.body) object.body = typify(object.body);
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);
  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(422).json(errorMessage);
  }
  Object.assign(req, value);
  return next();
};

export default validate;
