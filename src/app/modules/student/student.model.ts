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
    id:{type:String},
    name:userNameSchema,
    gender: ["male","female"], // predifned value thakle enum use korbo
    dateOfBirth:{type:String},
    email:{type:String, required:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    blood_group:['A','B','AB','O','A+','A-','B+','B-','AB+','AB-','O+','O-'],
    presentAddress:{type:String,required:true},
    permanantAddress:{type:String,required:true},
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImg:{type:String},
    isActive:['active','inActive'],
})


  // 3. Create a Model.

  const Student = model<Student>('student',studentSchema);
