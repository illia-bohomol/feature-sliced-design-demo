import { Task } from '@entities/task/lib/types';
import { Link } from 'atomic-router-react';
import * as React from 'react';

type TaskRowProps = {
  task: Task;
};

export const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
  return <Link></Link>;
};
