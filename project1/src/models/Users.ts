import { Roles } from "./Roles";




export class Users{
    userId:number;
    username:string;
    password:string;
    firstName:string;
    lastName:string;
    email:string;
    role:Roles;

    constructor() {
        this.userId = 0;
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = ''
        this.email = '';
        this.role = {
            role: '',
            roleId: 0
        };
    }
    
}