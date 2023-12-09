import picture from "../../../public/profilePhoto.png"
import style from "./ProfilePicture.module.css"

export default function ProfilePicture() {
  return (
    <img src={picture} alt="profilePicture" className={style.profilePhoto} />
  )
}