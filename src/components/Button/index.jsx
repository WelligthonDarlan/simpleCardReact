import style from "../Button/Button.module.css"

/*eslint-disable*/
export default function Button({text}) {
  return (
    <button className={style.btn}>{text}</button>
  )
}