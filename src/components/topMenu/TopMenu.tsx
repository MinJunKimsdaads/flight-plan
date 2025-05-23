import styles from '@/assets/css/topMenu/topMenu.module.scss';
import { useSettingStore } from '@/store/settingStore';
import Logo from './Logo';
import menuImg from '@/assets/img/topMenu/menu.svg';
import menuDarkImg from '@/assets/img/topMenu/menu_dark.svg';
import { useMenuStore } from '@/store/menuStore';
import { THEME_DARK } from '@/constants/settingConstant';

const TopMenu = () => {
    const menu = useMenuStore(state => state.menu);
    const setMenu = useMenuStore(state => state.setMenu);
    const theme = useSettingStore(state => state.theme);
    
    return (
        <div className={`${styles.topMenuBox} ${theme === THEME_DARK ? styles.dark:''}`}>
            <div>
                <Logo></Logo>
            </div>
            <div></div>
            <div className={`${styles.menuBtn} ${menu ? styles.active:''}`} onClick={()=>{
                setMenu(!menu);
            }}>
                <img src={`${theme === THEME_DARK ? menuDarkImg:menuImg}`} width={40} height={40} alt='menuBtn'/>
            </div>
        </div>
    )
}

export default TopMenu;