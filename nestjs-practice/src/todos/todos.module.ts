import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';

/// Use this cli command
/// nest g resource todos

@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
