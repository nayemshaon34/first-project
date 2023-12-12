import { Schema } from "mongoose";
import { Student } from "./student.interface";


// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
    id:{type:String},
    name:{
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
    },
    gender: ["male","female"], // predifned value thakle enum use korbo
    dateOfBirth:{type:String},
    email:{type:String, required:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    blood_group:['A','B','AB','O','A+','A-','B+','B-','AB+','AB-','O+','O-'],
    presentAddress:{type:String,required:true},
    permanantAddress:{type:String,required:true},
    guardian:{
        fatherName:{type:String,required:true},
        fatherContactNo:{type:String,required:true},
        fatherOccupation:{type:String,required:true},
        motherName:{type:String,required:true},
        motherContactNo:{type:String,required:true},
        motherOccupation:{type:String,required:true},
    },
    localGuardian:{
        name:{type:String,required:true},
        occupation:{type:String,required:true},
        contactNo:{type:String,required:true},
        address:{type:String,required:true},
    },
    profileImg:{type:String}
    isActive:['active','inActive'],
})


  // 3. Create a Model.
