import styles from './Header.module.css';

import toDoLogo from "../assets/logo-todo.svg";

import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />

      <form className={styles.newTask}>
        <input 
          placeholder='Adicione uma nova tarefa'
          type="text" 
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}
