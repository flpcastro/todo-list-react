import styles from './Header.module.css';

import toDoLogo from "../assets/logo-todo.svg";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('');
        
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />

      <form className={styles.newTask} onSubmit={handleSubmit} >
        <input 
          placeholder='Adicione uma nova tarefa'
          type="text"
          onChange={onChangeTitle}
          value={title} 
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}
