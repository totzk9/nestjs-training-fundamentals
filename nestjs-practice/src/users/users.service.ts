import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/create-user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{id:0, name:'Tyrone'}, {id:1, name:'Abad'}]

  findAll(name?: string): User[] {
    if (name) {
      // this.users.forEach(user => {
      //   if (user.name === name) {
      //     return user;
      //   }
      // });

      return this.users.filter(user => user.name === name)
    }
    return this.users
  }

  findById(userId: number): User {
    return this.users.find(user => user.id === userId)
  }

  createUser(name: CreateUserDto): User {
    const user = { id: Date.now(), ...name }
    this.users.push(user)
    return user
  }
}
