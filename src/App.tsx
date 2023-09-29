
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { Tasks } from './components/Tasks';

import './global.css';

import styles from './App.module.css';

function App() {
  

  return (
    <div className={styles.container}>
      <Header title="Minha lista de Tecnologias"/>

      <main>
          <InputTask/>
          <Tasks />
      </main>
    </div>
  )
}

export default App
