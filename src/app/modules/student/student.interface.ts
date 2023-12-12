//created interface
export type Guardian = {
    fatherName:string;
    fatherOccupation:string;
    fatherContactNo:string;
    motherName:string;
    motherOccupation:string;
    motherContactNo:string;
};

export type UserName = {
    firstName:string;
    middleName:string;
    lastName:string;
};

export type LocalGuardian = {
    name:string;
    occupation:string;
    contactNo:string;
    address:string;
};


export type Student = {
    id:string;
    name:UserName;
    gender:'male' | "female"; //union type literal
    email:string;
    dateOfBirth?:string;
    avatar?:string;
    contactNo:string;
    emergencyContactNo:string;
    blood_group?:'A' | 'B' | 'AB' | 'O' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress:string;
    permanantAddress:string;
    guardian:Guardian;
    localGuardian:LocalGuardian;
    profileImg?:string;
    isActive:"active"|"inActive";
};