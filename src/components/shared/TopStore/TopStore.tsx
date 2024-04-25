import topStore from "./topstore.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

function TopStore() {
  return (
    <div className={styles.topStore}>
        <div className={styles.topStore_conteiner}>
            <div className={styles.topStore_titleConteiner}>
                <h3 className={styles.topStore_title}>Парсеры товаров популярных интернет-магазинов</h3>
            </div>
            <div className={styles.topStore_subtitleConteiner}>
                <p className={styles.topStore_subtitle}>Все парсеры регулярно актуализируются и обновляются. Наполняйте свои магазины, отслеживайте изменения цен, стабильную работу обеспечит ADA-Parser</p>
            </div>
        </div>
        <div className={styles.topStoreinfo}>
            {topStore.map((item)=>(
                <div >
                    <img className={styles.topStoreinfo_img} src={item.img} alt="" />
                    <h3 className={styles.topStoreinfo_title}>{item.title}</h3>
                    <p className={styles.topStoreinfo_text}>{item.text}</p>
                    <Link to={item.link}> <h3 className={styles.topStoreinfo_link}>Подробнее о парсинге <FontAwesomeIcon id={styles.topStoreinfo_icon} icon={faArrowRight} /></h3> </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopStore