import ControlerBtn from "./ControlerBtn";
import { useSettingStore } from "@/store/settingStore";
import styles from "@/assets/css/controler/Controler.module.scss";
import settingImg from '@/assets/img/controler/setting.svg';
import settingDarkImg from '@/assets/img/controler/setting_dark.svg';
import filterImg from '@/assets/img/controler/filter.svg';
import filterDarkImg from '@/assets/img/controler/filter_dark.svg';
import widgetImg from '@/assets/img/controler/widget.svg';
import widgetDarkImg from '@/assets/img/controler/widget_dark.svg';
import weatherImg from '@/assets/img/controler/weather.svg';
import weatherDarkImg from '@/assets/img/controler/weather_dark.svg';
import { useControlerStore } from "@/store/controlerStore";
import { FILTER, WEATHER, SETTING, WIDGET } from "@/constants/controlerConstant";
import { THEME_DARK } from "@/constants/settingConstant";

const Controler = () => {
    const control = useControlerStore(state => state.control);
    const setControl = useControlerStore(state => state.setControl);
    const theme = useSettingStore(state => state.theme);

    const toggleControl = (selectedControl:string) => {
        if(control === selectedControl){
            setControl(null);
        }else{
            setControl(selectedControl);
        }
    }
    return (
        <div className={`${styles.controlerBox} ${theme === THEME_DARK ? styles.dark:''}`}>
            <ControlerBtn title={SETTING} img={theme === THEME_DARK ? settingDarkImg:settingImg} action={()=>{toggleControl(SETTING)}}></ControlerBtn>
            <ControlerBtn title={FILTER} img={theme === THEME_DARK ? filterDarkImg:filterImg} action={()=>{toggleControl(FILTER)}}></ControlerBtn>
            <ControlerBtn title={WIDGET} img={theme === THEME_DARK ? widgetDarkImg:widgetImg} action={()=>{toggleControl(WIDGET)}}></ControlerBtn>
            <ControlerBtn title={WEATHER} img={theme === THEME_DARK ? weatherDarkImg:weatherImg} action={()=>{toggleControl(WEATHER)}}></ControlerBtn>
        </div>
    )
}

export default Controler;