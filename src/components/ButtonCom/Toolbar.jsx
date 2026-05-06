import ButtonCom from './ToolbarButton.jsx';
import {handlePlay, handleStop} from './handle.jsx';
import style from './ButtonCom.module.css'
import sampleVideo from '../../assets/smaple.mp4';

export default function Toolbar(){
    return(
        <>
        <nav>
            <ButtonCom message={"#videoPlayer"} handle={handlePlay} className={style.button}>
                Play
            </ButtonCom>
            <ButtonCom message={"#videoPlayer"} handle={handleStop} className={style.button}>
                Stop
            </ButtonCom>
        </nav>
        <br/>
            <section>
                <video id="videoPlayer" src={sampleVideo} controls width="358"/>
            </section>
        </>
    )
}