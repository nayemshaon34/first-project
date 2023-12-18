import { z } from "zod";

const zodUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).regex(/^[A-Z][a-z]*$/, {
    message: 'First name must start with a capital letter and contain only letters.',
  }),
  middleName: z.string().min(1),
  lastName: z.string().min(1).regex(/^[a-zA-Z]+$/, {
    message: 'Last name must contain only letters.',
  }),
});

const zodGuardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherContactNo: z.string().min(1),
  fatherOccupation: z.string().min(1),
  motherName: z.string().min(1),
  motherContactNo: z.string().min(1),
  motherOccupation: z.string().min(1),
});

const zodLocalValidationGuardianSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const zodStudentValidationSchema = z.object({
  id: z.string().min(1),
  password:z.string().max(20),
  name: zodUserNameValidationSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  blood_group: z.enum(['A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().min(1),
  permanantAddress: z.string().min(1),
  guardian: zodGuardianValidationSchema,
  localGuardian: zodLocalValidationGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'inActive']).default('active'),
});


export default zodStudentValidationSchema;
