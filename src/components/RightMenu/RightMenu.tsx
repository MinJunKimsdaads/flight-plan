import styles from '@/assets/css/RightMenu/RightMenu.module.scss';
import RightMenuBtn from './RightMenuBtn';
import { useState } from 'react';
import { toggleFullScreen, toggleTheme } from '@/util/rightMenu';
import { useSettingStore } from '@/store/settingStore';
//img
import fullScreenOnImg from '@/assets/img/rightMenu/fullScreenOn.svg';
import fullScreenOffImg from '@/assets/img/rightMenu/fullScreenOff.svg';
import fullScreenOnDarkImg from '@/assets/img/rightMenu/fullScreenOn_dark.svg';
import fullScreenOffDarkImg from '@/assets/img/rightMenu/fullScreenOff_dark.svg';
import darkModeImg from '@/assets/img/rightMenu/darkMode.svg';
import simpleModeImg from '@/assets/img/rightMenu/simpleMode.svg';

//img


const RightMenu = () => {
    const theme = useSettingStore(state => state.theme);
    const [isFullScreen, setIsFullScreen] = useState(false);
    return(
        <div className={`${styles.rightMenuBox}`}>
            {
                isFullScreen ? <RightMenuBtn title='전체화면 종료' action={()=>{
                    toggleFullScreen(isFullScreen);
                    setIsFullScreen(!isFullScreen);
                }} img={`${theme === 'dark' ? fullScreenOffDarkImg:fullScreenOffImg}`}></RightMenuBtn> :
                <RightMenuBtn title='전체화면 시작' action={()=>{
                    toggleFullScreen(isFullScreen);
                    setIsFullScreen(!isFullScreen);
                }} img={`${theme === 'dark' ? fullScreenOnDarkImg:fullScreenOnImg}`}></RightMenuBtn>
            }
            {
                theme === 'dark' ? <RightMenuBtn title='일반모드' action={()=>{
               toggleTheme(theme); 
            }} img={simpleModeImg} >
            </RightMenuBtn> : <RightMenuBtn title='다크모드' action={()=>{
               toggleTheme(theme); 
            }} img={darkModeImg} >
            </RightMenuBtn>
            }
        </div>
    )    
}

export default RightMenu;