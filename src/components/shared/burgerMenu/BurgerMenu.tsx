import {Link} from "react-router-dom";
import   adaUse   from '../../../common/Header/adaUse.json';
import  resources  from '../../../common/Header/resources.json';
import styles from './BurgerMenu.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/src/components/ui/navigation-menu"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/src/components/ui/sheet"

export const BurgerMenu = () => {
    return(
        <div className={styles.BurgerMenu}>
            <Sheet>
                <SheetTrigger>
                    <FontAwesomeIcon id={styles.BurgerMenu_icon} icon={faBars} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>ADA-Parser</SheetTitle>
                        <SheetDescription>
                            <NavigationMenu className={styles.BurgerMenu_NavigationMenu}>
                                <NavigationMenuList className={styles.NavigationMenuList}>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className={styles.NavigationMenuTrigger}>Кто использует ADA-Parser</NavigationMenuTrigger>
                                        <NavigationMenuContent className={styles.NavigationMenuContent}>
                                            {adaUse.map((item) => (
                                                <Link to={item.link} key={item.subtitle}>
                                                    <div className={styles.Header__link}>
                                                        <img className={styles.Header__link_img} src={item.img} alt="" />
                                                        <NavigationMenuLink className={styles.Header__link_subtitle}>{item.subtitle}</NavigationMenuLink>
                                                    </div>
                                                </Link>
                                            ))}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className={`${styles.NavigationMenuTrigger} ${styles.resurs}`}>Ресурсы</NavigationMenuTrigger>
                                        <NavigationMenuContent className={styles.NavigationMenuContent2}>
                                            {resources.map((item) => (
                                                <Link to={item.link} key={item.subtitle}>
                                                <div key={item.subtitle} className={styles.Header__link}>
                                                    <img className={styles.Header__link_img} src={item.img} alt="" />
                                                    <NavigationMenuLink className={styles.Header__link_subtitle}>{item.subtitle}</NavigationMenuLink>
                                                </div>
                                                </Link>
                                            ))}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                                <Link to="/parsings-list"><h2 className={`${styles.NavigationMenuTrigge} ${styles.NavigationMenuTrigg}`}>Парсеры</h2></Link>
                                <Link to="/services"><h2 className={styles.NavigationMenuTrigge}>Услуги</h2></Link>
                            </NavigationMenu>
                            <Link to="#"><button className={styles.BurgerMenu_button}>Купить ADA-Parser</button></Link>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}