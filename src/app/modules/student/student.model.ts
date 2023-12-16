import { Schema, model } from "mongoose";
import { Guardian, LocalGuardian, Student, UserName } from "./student.interface";


// 2. Create a Schema corresponding to the document interface.
const userNameSchema = new Schema<UserName>({
    firstName:{
        type:String,
        required:true,
    },
    middleName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
});

const guardianSchema = new Schema<Guardian>({
    fatherName:{type:String,required:true},
    fatherContactNo:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    motherName:{type:String,required:true},
    motherContactNo:{type:String,required:true},
    motherOccupation:{type:String,required:true},
});

const localGuardianSchema = new Schema<LocalGuardian>({
    name:{type:String,required:true},
    occupation:{type:String,required:true},
    contactNo:{type:String,required:true},
    address:{type:String,required:true},
});

const studentSchema = new Schema<Student>({
    id:{type:String, required:true, unique:true},
    name:{
        type:userNameSchema,
        required:[true,'name must enter kortei hobe'],
    },
    gender: {
        type: String,
        enum : {
            values:["male","female"],
            message:"the gender can only be one of the follwing: 'male','female'"
        },
        required: true,
    }, // predifned value thakle enum use korbo
    dateOfBirth:{type:String},
    email:{type:String, required:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    blood_group:{
        type:String,
        enum:{
            values:['A','B','AB','O','A+','A-','B+','B-','AB+','AB-','O+','O-'],
            message:'{VALUE} is not valid'
        },
        required:true,
    },
    presentAddress:{type:String,required:true},
    permanantAddress:{type:String,required:true},
    guardian:{
        type:guardianSchema,
        required:true,
    },
    localGuardian:{
        type:localGuardianSchema,
        required:true,
    },
    profileImg:{type:String},
    isActive:{
        type:String,
        enum:['active','inActive'],
        required:true,
        default:'active',
    },
})


  // 3. Create a Model.

  export const StudentModel = model<Student>('Student',studentSchema);
