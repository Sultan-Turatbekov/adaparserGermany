import infoabout from "./infoabout.json"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
function Infoabout() {
  const [t,i18n]=useTranslation();
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