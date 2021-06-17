import { BadRequestException, Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { type } from 'node:os';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/create-user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({type: User, isArray: true, description: 'Returns all the users in the database.'})
  @ApiQuery({ name: 'name', required: false})
  @Get()
  async getUsers(@Query('name') name: string): Promise<User[]> {
    return this.userService.findAll(name)
  }

  @ApiOkResponse({type: User, description: 'Returns the user with the specified userID in the database.'})
  @ApiNotFoundResponse()
  @Get(':id') 
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const user: User = this.userService.findById(id)

    if (!user) {
      // throw new InternalServerErrorException()
      throw new NotFoundException()
    }
    return user
  }

  @ApiCreatedResponse({type: User})
  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.createUser(body)
  }

}
