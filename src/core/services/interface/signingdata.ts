
export interface SigningIndata {

    email:string,
    password:string,

}

export interface SigningUpdata extends SigningIndata{

    // name: string,
    // email:string,
    password:string,
    rePassword:string,
    phone:string

}