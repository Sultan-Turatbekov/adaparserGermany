import Infoabout from "../shared/Infoabout/Infoabout"
import servicesDataJson from "./servicesDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import { Pricing } from "../shared/Pricing/Pricing"
import styles from "./Services.module.scss"

function Services() {
  return (
    <>
    <AllEnterLink dataJson={servicesDataJson}/>

    <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="servicesPage/servicesPage3.png" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}>Индивидуальные решения каждой задачи</h3>
          <p className={styles.services_text}>Колоссальная производительность, многопоточность, автономность, гибкость конфигураций позволяет A-Parser’у решать практически любые задачи по сбору данных с различных источников</p>
          <p className={styles.services_text}>Мы предлагаем индивидуальные решения парсинга — вы получаете уникальную базу данных, собранную согласно вашим требованиям</p>
      </div>
    </div>

    <div className={styles.services}>
    <div>
          <h3 className={styles.services_title}>Почему мы лучшие в этом</h3>
          <p className={styles.services_text}>Наши технические специалисты выполняют парсинг данных, строго следуя техническому заданию. Объем данных ограничен только вами (по ТЗ) или ресурсом, с которого будет выполняться парсинг</p>
          <p className={styles.services_text}>Ключевым преимуществом для вас может стать то, что вы сами в дальнейшем сможете парсить данные, купив лицензию A-Parser с пресетом под ваше задание</p>
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="servicesPage/servicesPage2.png" alt="" />
      </div>
    </div>

    <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="servicesPage/servicesPage3.svg" alt="" />
      </div>
      <div>
          <h3 className={styles.services_title}>Стоимость парсинга данных по вашим техническим заданиям</h3>
          <p className={styles.services_text}>Минимальный заказ — $50. Точная стоимость формируется после рассмотрения вашего технического задания</p>
          <p className={styles.services_text}>В стоимость входит написание уникального пресета для A-Parser, который можно будет использовать в дальнейшем. Предусмотрено тестирование пресета, формирование файла результатов для клиента</p>
      </div>
    </div>

    <div className={styles.schemeOfWork}>
        <div className={styles.schemeOfWork_titleContiner}>
            <h3 className={styles.schemeOfWork_title}>Схема работы</h3>
            <h4 className={styles.schemeOfWork_subtitle}>Услуги парсинга данных позволяют получить нужную информацию не тратя свое время</h4>
        </div>
        <Pricing/>
        <Infoabout/>
        
    </div>

    </>
  )
}

export default Services