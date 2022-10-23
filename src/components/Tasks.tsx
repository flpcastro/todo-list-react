import { Task } from './Task';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.tasksHeader}>
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.tasksFinished}>Concluídas</p>
          <span>5 de 10</span>
        </div>
      </header>

      <div className={styles.taskList}>
        <Task />
        <Task />
      </div>
    </section>
  )
}