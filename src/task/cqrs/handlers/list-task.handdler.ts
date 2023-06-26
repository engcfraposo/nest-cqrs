import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../entities/task.entity';
import { ListTaskQuery } from '../queries/list-task.query';

@QueryHandler(ListTaskQuery)
export class ListTaskHandler implements IQueryHandler<ListTaskQuery> {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}
  execute(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
