import logo from '@/assets/img/topMenu/logo.png';
import { useSettingStore } from '@/store/settingStore';
import styles from '@/assets/css/topMenu/Logo.module.scss';
import { THEME_DARK } from '@/constants/settingConstant';

const Logo = () => {
    const theme = useSettingStore(state => state.theme);
    return (
        <img className={`${styles.logoImg}`} src={theme === THEME_DARK ? logo : logo} height={60}/>
    );
}

export default Logo;