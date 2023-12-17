import Joi from "joi";
// creating a schema validation using joi
const userNameJoiValidationSchema = Joi.object({
    firstName: Joi.string()
        .required()
        .max(20)
        .pattern(new RegExp('^[A-Za-z]+$'))
        .message('First name should be a string with a maximum length of 20 and contain only alphabetic characters.'),

    middleName: Joi.string().required(),

    lastName: Joi.string()
        .required()
        .pattern(new RegExp('^[A-Za-z]+$'))
        .message('Last name should be a string and contain only alphabetic characters.'),
});

// Joi schema for Guardian subdocument
const guardianJoiValidtaionSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    motherName: Joi.string().required(),
    motherContactNo: Joi.string().required(),
    motherOccupation: Joi.string().required(),
});

// Joi schema for LocalGuardian subdocument
const localGuardianValidationJoiSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
});

// Joi schema for the Student document
const studentJoiValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameJoiValidationSchema.required(),
    gender: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string(),
    email: Joi.string().email().required(),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    blood_group: Joi.string().valid(
        'A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
    ).required(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianJoiValidtaionSchema.required(),
    localGuardian: localGuardianValidationJoiSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('active', 'inActive').required(),
});






export default studentJoiValidationSchema;