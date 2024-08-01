import Joi from 'joi';

const driverSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    licenseNumber: Joi.string().required()
});

export { driverSchema };
