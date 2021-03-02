import { useState } from 'react';
import styles from '../../styles/pages/SignIn.module.css';

export default function SignIn(){
  const [username, setUsername] = useState("");

  return(
    <div className={styles.signInContainer}>
    
      <img src="/simbolo.svg" alt="MoveIt"/>
     
      <div className={styles.formContainer}>
        <img src="/logo-full-white.svg" alt="MoveIt"/>

        <span>Bem-vindo</span>

        <div>
          <img src="/icons/github.svg" alt="Github"/>
          <span>Faça login com seu Github para começar</span>
        </div>

        <form>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Digite seu username"/>
          <button type="submit" className={username.length >= 3 && styles.isValid}>
            <img src="/icons/arrow-right.svg" alt="Entrar"/>
          </button>
        </form>

      </div>
    </div>
  )
}