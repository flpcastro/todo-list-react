import styles from './Task.module.css';

import { TbTrash } from 'react-icons/tb';

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor omnis reprehenderit ut doloribus, officiis est voluptate error, obcaecati soluta ratione non temporibus, impedit vel similique saepe earum voluptatem corrupti?
      </p>

      <button className={styles.deleteTask}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}