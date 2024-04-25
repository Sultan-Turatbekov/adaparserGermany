import seoDataJson from "./seoDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import data from "./searchParsing.json"
import styles from "./style.module.scss"
import {AllParsings} from "@/src/components/shared/AllParsings/AllParsing.tsx";
import Infoabout from "../shared/Infoabout/Infoabout";


function Seo() {
  return (
    <div>
    <AllEnterLink dataJson={seoDataJson}/>
    <section className={styles.seo}>
            <h2 className={styles.seo_title}>Основные возможности парсеров <br /> поисковых систем</h2>
            <div className={styles.seoinfo}>
                {data.map((item) => (
                     <div className={styles.seoinfo_conteiner}>
                      <img className={styles.seoinfo_img} src={item.img} alt="" />
                      <h3 className={styles.seoinfo_title}>{item.title}</h3>
                      <p className={styles.seoinfo_text}>{item.text}</p>
                     </div>
                ))}
            </div>
        </section>
        <AllParsings/>
        <div className={styles.services}>
      <div>
          <h3 className={styles.services_title}>Проверка позиций по ключевым словам</h3>
          <p className={styles.services_text}>ADA-Parser проверяет позиции сайтов по списку поисковых запросов в Google, Yandex, Bing и Mail.ru с возможностью задавать параметры, такие как: регион, страна, город и язык</p>
          <p className={styles.services_text}>Доступен пакетный анализ позиций, сразу по нескольким доменам. Вы можете собирать статистику как для своих сайтов так и оценивать позиции в выдаче своих конкурентов</p>
          <p>Вы можете парсить позиции несколькими методами: - парсинг в виде запроса: домен — ключ - парсинг в виде запроса: домен — файл со списком запросов</p>
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="seo/keyword.jpg" alt="services" />
      </div>
    </div>
    
        <Infoabout/>
    </div>
  )
}

export default Seo