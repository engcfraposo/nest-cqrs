import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { Task } from './entities/task.entity';
import { CreateTaskHandler } from './cqrs/handlers/create-task.handdler';
import { ListTaskHandler } from './cqrs/handlers/list-task.handdler';
import { ListByIdTaskHandler } from './cqrs/handlers/list-by-id-task.handdler';
import { DeleteTaskHandler } from './cqrs/handlers/delete-task.handdler';
import { UpdateByCompletedHandler } from './cqrs/handlers/update-by-completed.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), CqrsModule],
  controllers: [TaskController],
  providers: [
    CreateTaskHandler,
    ListTaskHandler,
    ListByIdTaskHandler,
    DeleteTaskHandler,
    UpdateByCompletedHandler,
  ],
})
export class TaskModule {}
