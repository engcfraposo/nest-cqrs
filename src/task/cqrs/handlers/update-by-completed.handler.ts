import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../entities/task.entity';
import { UpdateByCompletedCommand } from '../commands/update-by-completed.command';

@CommandHandler(UpdateByCompletedCommand)
export class UpdateByCompletedHandler
  implements ICommandHandler<UpdateByCompletedCommand>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}
  async execute(command: UpdateByCompletedCommand): Promise<void> {
    const { id, completed } = command;
    await this.taskRepository.update(id, { completed });
  }
}
