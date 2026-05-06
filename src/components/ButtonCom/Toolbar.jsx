import ButtonCom from './ToolbarButton.jsx';
import {handleClick} from './handle.jsx';
import style from './ButtonCom.module.css'

export default function Toolbar(){
    return(
        <>
        <ButtonCom message={"버튼 클릭"} handle={handleClick} className={style.button}>
            버튼1
        </ButtonCom>
        <ButtonCom message={"버튼 클릭"} handle={handleClick} className={style.button}>
            버튼2
        </ButtonCom>
        </>
    )
}