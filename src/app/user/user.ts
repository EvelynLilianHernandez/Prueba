

export class User {
    _id?:string;
    updated_at?:string;
    created_at?:string;
    firstName:string;
    lastName:string;
    role:string;
    email:string;
    password:string;
    deletedAt?:string;

    constructor(user){
        if (user.id) this._id=user._id;
        if(user.updated_at) this.updated_at=user.updated_at;
        if(user.created_at) this.created_at=user.created_at;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.role = user.role;
        this.email = user.email;
        this.password = user.password;
        if(user.deletedAt) this.deletedAt=user.deletedAt;
    }
}