import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req:Request,res:Response)=>{

//param diye parameter, query diye query parameter and body diye pura boro data anbo
try {
    // const student = req.body.student;
    const {student:studentData/*name elias*/} = req.body;

//will call service function to send this data

const result = await StudentServices.createStudentIntoDB(studentData)
 //send response

 res.status(200).json({
    success:true,
    message:"student is created succesfully",
    data:result
 });
} catch (error) {
    console.log(error);
}
};


const getAllStudentFromService = async(req:Request,res:Response)=>{
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            sucess:true,
            message:"students are retrieved successfully",
            data:result,
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudentFromService
}