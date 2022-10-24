import { TbClipboardText } from 'react-icons/tb';
import { TaskProps } from '../App';
import { Task } from './Task';
import styles from './Tasks.module.css';

interface Props {
  tasks: TaskProps[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.tasksHeader}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.tasksFinished}>Concluídas</p>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.taskList}>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.noTask}>
            <TbClipboardText size={50}/>
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}