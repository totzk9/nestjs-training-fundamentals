import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/create-user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(name: string): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
}
