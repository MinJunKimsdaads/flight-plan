import styles from '@/assets/css/RightMenu/RightMenu.module.scss';
import RightMenuBtn from './RightMenuBtn';
import { useState } from 'react';
import { toggleFullScreen, toggleTheme, zoomIn, zoomOut } from '@/util/rightMenu';
import { useSettingStore } from '@/store/settingStore';
import { useMap } from '@/contexts/MapContext';
//img
import fullScreenOnImg from '@/assets/img/rightMenu/fullScreenOn.svg';
import fullScreenOffImg from '@/assets/img/rightMenu/fullScreenOff.svg';
import fullScreenOnDarkImg from '@/assets/img/rightMenu/fullScreenOn_dark.svg';
import fullScreenOffDarkImg from '@/assets/img/rightMenu/fullScreenOff_dark.svg';
import darkModeImg from '@/assets/img/rightMenu/darkMode.svg';
import simpleModeImg from '@/assets/img/rightMenu/simpleMode.svg';
import plusImg from '@/assets/img/rightMenu/plus.svg';
import plusDarkImg from '@/assets/img/rightMenu/plus_dark.svg';
import minusImg from '@/assets/img/rightMenu/minus.svg';
import minusDarkImg from '@/assets/img/rightMenu/minus_dark.svg';
import legendImg from '@/assets/img/rightMenu/legend.svg';
import legendDarkImg from '@/assets/img/rightMenu/legend_dark.svg';
import { THEME_DARK } from '@/constants/settingConstant';
//img


const RightMenu = () => {
    const {map} = useMap();
    const theme = useSettingStore(state => state.theme);
    const [isFullScreen, setIsFullScreen] = useState(false);
    return(
        <div className={`${styles.rightMenuBox}`}>
            {
                isFullScreen ? <RightMenuBtn title='전체화면 종료' action={()=>{
                    toggleFullScreen(isFullScreen);
                    setIsFullScreen(!isFullScreen);
                }} img={`${theme === THEME_DARK ? fullScreenOffDarkImg:fullScreenOffImg}`}></RightMenuBtn> :
                <RightMenuBtn title='전체화면 시작' action={()=>{
                    toggleFullScreen(isFullScreen);
                    setIsFullScreen(!isFullScreen);
                }} img={`${theme === THEME_DARK ? fullScreenOnDarkImg:fullScreenOnImg}`}></RightMenuBtn>
            }
            {
                theme === THEME_DARK ? <RightMenuBtn title='일반모드' action={()=>{
               toggleTheme(theme); 
            }} img={simpleModeImg} >
            </RightMenuBtn> : <RightMenuBtn title='다크모드' action={()=>{
               toggleTheme(theme); 
            }} img={darkModeImg} >
            </RightMenuBtn>
            }
            <RightMenuBtn title='확대' action={()=>{zoomIn(map)}} img={`${theme === THEME_DARK ? plusDarkImg:plusImg}`}></RightMenuBtn>
            <RightMenuBtn title='축소' action={()=>{zoomOut(map)}} img={`${theme === THEME_DARK ? minusDarkImg:minusImg}`}></RightMenuBtn>
            <RightMenuBtn title='범례' action={()=>{console.log('범례')}} img={`${theme === THEME_DARK ? legendDarkImg:legendImg}`}></RightMenuBtn>
        </div>
    )    
}

export default RightMenu;