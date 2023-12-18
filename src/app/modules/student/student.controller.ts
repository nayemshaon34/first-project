import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import zodStudentValidationSchema from "./student.ZodValidator";
// import studentJoiValidationSchema from "./student.JoiValidation";
// import {z} from "zod";



const createStudent = async (req:Request,res:Response)=>{

//param diye parameter, query diye query parameter and body diye pura boro data anbo
try {
    // const student = req.body.student;
const {student:studentData/*name elias*/} = req.body;

//data validation using joi
// const {error,value} = studentJoiValidationSchema.validate(studentData);
    
// const result = await StudentServices.createStudentIntoDB(studentData);

// if(error){
//     res.status(500).json({
//         success:false,
//         message:"Something is wrong",
//         error,
//     })
// };
//will call service function to send this data


//data validation using zod
// const zodStudentSchema = z.object({
//     id:z.string(),
//     name:z.object({
//         firstName:z.string().max(20,{message:"must be less than 20"}),
//         lastName:z.string(),
//         middleName:z.string(),
//     })
// });

 //send response

//  data validation using zod

    const zodParseData = zodStudentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParseData);
    res.status(200).json({
    success:true,
    message:"student is created succesfully",
    data:result
 });
} catch (error) {
    res.status(500).json({
    success:false,
    message:"something went wrong",
    error:error,
    });
}
};


const getAllStudentFromService = async (req:Request,res:Response)=>{
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            sucess:true,
            message:"students are retrieved successfully",
            data:result,
        })
    } catch (err:any) {
        // console.log(error);
        res.status(500).json({
            success:false,
            message:"something went wrong" || err.message,
            error:err,
            });
    }
};

const getSingleFromService = async (req:Request,res:Response)=>{
    try {
        const { studentID } = req.params;
        // const studentID = req.params.StudentId; //route e j name thakbe oitai dite hobe .params. er por
        const result = await StudentServices.getSingleStudentFromDB(studentID);
        
        res.status(200).json({
            success:true,
            message:"a single student is retreived successfully",
            data:result,
        })
    } catch (error:any) {
        res.status(500).json({
        success:false,
        message:"something went wrong" || error.message,
        error:error,
        });
        
    }
};


const deleteStudent = async (req:Request,res:Response)=>{
    try {
        const { studentID } = req.params;
        // const studentID = req.params.StudentId; //route e j name thakbe oitai dite hobe .params. er por
        const result = await StudentServices.deleteSingleStudentFromDB(studentID);
        
        res.status(200).json({
            success:true,
            message:"a single student is retreived successfully",
            data:result,
        })
    } catch (error:any) {
        res.status(500).json({
        success:false,
        message:"something went wrong" || error.message,
        error:error,
        });
        
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudentFromService,
    getSingleFromService,
    deleteStudent
}