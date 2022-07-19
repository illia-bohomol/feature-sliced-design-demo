import { Task } from '@entities/task/lib/types';
import { TaskModel } from '@shared/api/tasks';

export const mapTaskModelToTask = (taskModel: TaskModel): Task => {
  return {
    id: taskModel.id,
    title: taskModel.taskTitle,
    description: taskModel.description,
    isCompleted: taskModel.isChecked,
  };
};
