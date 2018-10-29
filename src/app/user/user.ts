

export class User {
    firstName:string;
    lastName:string;
    role:string;
    email:string;
    password:string;

    constructor(user){
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.role = user.role;
        this.email = user.email;
        this.password = user.password;
    }
}