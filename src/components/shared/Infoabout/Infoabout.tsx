import infoabout from "./infoabout.json"
import styles from "./styles.module.scss"

function Infoabout() {
  return (
    <div className={styles.schemeOfWork_info_conteiner}>
        {infoabout.map((item)=>(
          <div className={styles.schemeOfWork_info}>
          <img className={styles.schemeOfWork_info_img} src={item.img} alt="" />
          <h3 className={styles.schemeOfWork_info_title}>{item.subtitle}</h3>
          <h4 className={styles.schemeOfWork_info_subtitle}>{item.text}</h4>
        </div>
        ))}
    </div>
  )
}

export default Infoabout