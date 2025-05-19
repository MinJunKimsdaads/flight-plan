import styles from '@/assets/css/RightMenu/RightMenuBtn.module.scss';
import { useState } from 'react';

const RightMenuBtn = ({title,img,action}) => {
    const [isHovered,setIsHovered] = useState(false);
    return (
        <>
            <div className={`${styles.rightMenuBtn}`} onClick={()=>{action()}} onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
                <img src={img}></img>
            </div> 
            <div className={`${styles.rightMenuBtnTooltip} ${isHovered && styles.tooltipOn}`}>{title}</div>
        </>
    
    );
};

export default RightMenuBtn;