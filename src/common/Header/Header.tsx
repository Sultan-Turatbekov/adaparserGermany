import {Link} from "react-router-dom";
import  adaUse  from './adaUse.json';
import  resources  from './resources.json';
import { BurgerMenu } from "../../components/shared/burgerMenu/BurgerMenu";
import styles from './Header.module.scss';


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/src/components/ui/navigation-menu"
   import {useTranslation} from 'react-i18next';

  export const Header = () => {

    const {t,i18n}=useTranslation();
    const changeLanguage = (language:string)=>{
        i18n.changeLanguage(language);
    }
    return (
        <header className={`${styles.full_bleed }`}>
            <div className={styles.header_container}>
                <NavigationMenu className={styles.NavigationMenu}>
                    <div className={styles.header_logoContainer}>
                        <Link to="/">
                            <img src="/logoWi.svg" alt="logo" />
                        </Link>
                    </div>
                    <NavigationMenuList className={styles.NavigationMenuList}>
                        <NavigationMenuItem className={styles.NavigationMenuItem}>{t("header.header1")}
                            <NavigationMenuTrigger className={styles.NavigationMenuTrigger}>d</NavigationMenuTrigger>
                            <NavigationMenuContent className={styles.NavigationMenuContent}>
                                {adaUse.map((item) => (
                                    <NavigationMenuLink >
                                    <Link to={item.link} key={item.subtitle}>
                                        <div className={styles.Header_link}>
                                            <img className={styles.Header_link_img} src={item.img} alt="" />
                                            <h3 className={styles.Header_link_subtitle}>{item.subtitle}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={styles.NavigationMenuTrigger}>{t("header.resource")}</NavigationMenuTrigger>
                            <NavigationMenuContent className={styles.NavigationMenuContent2}>
                                {resources.map((item) => (
                                    <NavigationMenuLink>
                                    <div key={item.subtitle} className={styles.Header_link}>
                                        <img className={styles.Header_link_img} src={item.img} alt="" />
                                        <h3 className={styles.Header_link_subtitle}>{item.subtitle}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <Link to="/parsings-list"><h2 className={`${styles.NavigationMenuTrigger} ${styles.NavigationMenuTrigg}`}>{t("header.parsers")}</h2></Link>
                    <Link to="/services"><h2 className={styles.NavigationMenuTrigge}>{t("header.service")}</h2></Link>
                </NavigationMenu>
                <Link to="https://web.telegram.org/a/#6944523790"><button className={styles.header_button}>{t("header.buy")}</button></Link>
                <BurgerMenu />
                <div className={styles.header_logo_media}>
                    <img src="/logoWi.svg" alt="" />
                </div>
                
                <button className={styles.multiLanguage} onClick={()=>changeLanguage("en")}>En</button>
                <button className={styles.multiLanguage} onClick={()=>changeLanguage("gr")}>Gr</button>
                
            </div>
            
        </header>
    );
}