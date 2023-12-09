import style from "./Title.module.css"

export default function Title({name}) {
  return (
    <h1 className={style.nameProfile}>{name}</h1>
  )
}