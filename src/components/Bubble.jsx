import style from './ButtonCom/Bubble.module.css'
function Button({onClick, text}){
    return(
        <button className={style.button} onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {text}
        </button>
    );
}
export default function Bubble(){
    return(
        <>
            <h1 className={style.title}>Bubble</h1>
            <nav className={style.navBar} onClick={() => alert("네비게이션 클릭")}>
                <Button onClick={() => alert("버튼1 클릭") } text = "버튼1"/>   
                <Button onClick={() => alert("버튼2 클릭") } text = "버튼2"/>
            </nav>
        </>
    )
}