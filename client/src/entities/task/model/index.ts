import { mapTaskModelToTask } from '@entities/task/lib/modelMappers';
import { Task } from '@entities/task/lib/types';
import { createEffect, createStore } from 'effector';
import { selectors } from '_backend-mock';

const fetchTasksFx = createEffect(() => selectors.useSelectTasks());

const $tasks = createStore<Task[]>([]).on(
  fetchTasksFx.doneData,
  (_, tasksModel) => {
    const newTasks = tasksModel.map(mapTaskModelToTask);

    return newTasks;
  }
);
