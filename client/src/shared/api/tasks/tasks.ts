import { selectors, effects } from '../../../_backend-mock';

export const tasksApi = {
  getTasks: () => selectors.useSelectTasks(),
  toggleTaskCheck: (taskId: number) => effects.toggleTaskCheckFx(taskId),
};
