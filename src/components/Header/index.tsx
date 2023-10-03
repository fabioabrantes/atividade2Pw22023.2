import styles from './Header.module.css';

type Props = {
  title:string;
}
export function Header({title}:Props){
  return (
    <header className={styles.header}>
      <span>{title}</span>
    </header>
  )
}