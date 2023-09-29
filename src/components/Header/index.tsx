type Props = {
  title:string;
}
export function Header({title}:Props){
  return (
    <div>
      <span>{title}</span>
    </div>
  )
}