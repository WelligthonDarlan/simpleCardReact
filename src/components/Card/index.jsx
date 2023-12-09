import About from "../About"
import Button from "../Button"
import Email from "../Email"
import Phone from "../Phone"
import ProfilePicture from "../ProfilePicture"
import Title from "../Title"
import style from "./Card.module.css"

export default function Card() {
  return (
    <div className={style.card}>
      <ProfilePicture/>
      <Title name="Welligthon Darlan"/>
      <hr className={style.hr}/>
      <About/>
      <hr className={style.hr}/>
      <Phone/>
      <hr className={style.hr}/>
      <Email/>
      <hr className={style.hr}/>
      <Button text="GitHub"/>
      <Button text="LinkediN"/>
      <Button text="Twitter"/>
    </div>
  )
}