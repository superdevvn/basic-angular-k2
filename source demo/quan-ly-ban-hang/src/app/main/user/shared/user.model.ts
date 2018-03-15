export class User {
    Id: number = 0;
    RoleId: number = 0;
    RoleName:string;
    Username: string;
    Password: string;
    CreatorName:string;
    FirstName: string = '';
    LastName: string = '';
    Description: string;
    IsActive: boolean;
    IsDeleted: boolean;
    CreatedDate: Date;
    CreatedBy: string;
    constructor() {
        this.CreatedDate = new Date();
    }

}