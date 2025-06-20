import './Info.css'
import styles from './Info.module.css'

console.log(styles)
// {
//    "info": "Info_info__s8vxq",
//    "myOtherButton": "Info_myOtherButton__8e85U"
// }

function Info() {
  return (
    // используем стили модуля css как обьект js
    <div className={styles.info}>
      <h1>Hello from Info components</h1>
      <h2>Text h2 from component Info</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOtherButton}>
        Button wich local CSS styles
      </button>
    </div>
  )
}

export default Info
