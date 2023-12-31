// import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';
import validator from 'validator';
import { boolean } from 'joi';
// import config from '../../config';

// 2. Create a Schema corresponding to the document interface.
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    maxlength: [20, 'First name can not be more than 20'],
    validate: {
      validator: function (value: string) {
        const firstNameStr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return value === firstNameStr;
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required.'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
  isDeleted:{
    type:Boolean,
    default:false,
  }
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's name is required."] },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required."],
  },
  motherName: { type: String, required: [true, "Mother's name is required."] },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required."],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required."],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required."],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required."],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required."],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID must be provided.'],
    unique: true,
  },
  password: { type: String, required: [true, 'Password must be entered'] },
  name: {
    type: userNameSchema,
    required: [true, 'Student name details are required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "The gender can only be 'male' or 'female'.",
    },
    required: [true, 'Gender is required.'],
  }, // predifned value thakle enum use korbo
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Email must be provided.'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid',
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number must be provided.'],
  },
  blood_group: {
    type: String,
    enum: {
      values: [
        'A',
        'B',
        'AB',
        'O',
        'A+',
        'A-',
        'B+',
        'B-',
        'AB+',
        'AB-',
        'O+',
        'O-',
      ],
      message: '{VALUE} is not a valid blood group.',
    },
    required: [true, 'Blood group must be provided.'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address must be provided.'],
  },
  permanantAddress: {
    type: String,
    required: [true, 'Permanent address must be provided.'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian details must be provided.'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian details must be provided.'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inActive'],
    required: [true, 'Student activity status must be provided.'],
    default: 'active',
  },
});

//pre save middleware / hook :will work on create() save()
// studentSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   console.log(this, 'pre-hook: we will save the data');
//   // hashing password and save into DB
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });

//post save middleware/hook
studentSchema.post('save', function (doc,next) {
    doc.password='';
    // console.log(doc, 'post-hook: we saved the date');
    next();
});


// query middleware
studentSchema.pre('find',function(next){
    console.log(this);
    next();
});

// 3. Create a Model.

export const StudentModel = model<Student>('Student', studentSchema);
