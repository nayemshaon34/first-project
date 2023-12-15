import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();


//will call controller function
router.post('/create-student',StudentControllers.createStudent);
router.get('/',StudentControllers.getAllStudentFromService);
router.get('/:studentId',StudentControllers.getSingleFromService); /*  /:StudentiId j name dibo oitai controller e use korte hobe   */

export const studentRoutes = router;