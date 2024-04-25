import marketersDataJson from "./marketersDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import Infoabout from "../shared/Infoabout/Infoabout"
import {AllParsings} from "@/src/components/shared/AllParsings/AllParsing.tsx";
import styles from "./styles.module.scss"

function Marketers() {
  return (
    <div>
        <AllEnterLink dataJson={marketersDataJson}/>
        <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="marketers/marketers1.png" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}>ADA-Parser для маркетинговых исследований рынка</h3>
          <p className={styles.services_text}>ADA-Parser поможет собрать полную и детальную информацию по конкурентам: каналы продвижения, стоимости их продукции, ассортименте товаров и услуг</p>
          <p className={styles.services_text}>Оценивайте лояльность потребителей к брендам конкурентов на основании собранных данных об отзывах, активностях в соц сетях, для правильного продвижения своего бренда</p>
          <p className={styles.services_text}>Собирайте данные о пользователях, регионах в которых активно действуют конкуренты для выявления спроса и точек роста</p>
      </div>
    </div>

    <div className={styles.services}>
    <div>
          <h3 className={styles.services_title}>Маркетинговые исследования поисковой выдачи с A-Parser</h3>
          <p className={styles.services_text}>Выполняйте парсинг выдачи на максимально отдаваемую поисковиками глубину. Собирайте ссылки, анкоры, сниппеты, связанные ключевые слова, а также данные с рекламных блоков</p>
          <p className={styles.services_text}>Проводите оценку геозависимости поисковых запросов, комплексный анализ позиций всех конкурентов в определенной нише, определяйте коммерческие запросы на основе данных о рекламе</p> 
          <p className={styles.services_text}>Выполняйте парсинг поисковых подсказок для расширения семантического ядра и генерации нового полезного и востребованного контента, а также улучшения релевантности уже существующего</p> 
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="marketers/marketers2.jpg" alt="" />
      </div>
    </div>
        <AllParsings/>
        <Infoabout/>
    </div>
  )
}

export default Marketers