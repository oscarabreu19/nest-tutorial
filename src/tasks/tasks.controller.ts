import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    getTasks(): string {
        return `${this.getTasks.name}`;
    }

    @Post()
    createTask(): string {
        return `${this.createTask.name}`;
    }
}
