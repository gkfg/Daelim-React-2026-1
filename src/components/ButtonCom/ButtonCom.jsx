import styles from './ButtonCom.module.css'
export default function ButtonCom(){
    const handleClick = () => {
        alert('버튼이 클릭되었습니다!');
    }
    return(
        <>
        <title className={styles.title}>Button</title>
        <nav className={styles.navBar}>
            <ul>
                <li><button className={styles.button} onClick={handleClick}>버튼1</button></li>
                <li><button className={styles.button} onClick={handleClick}>버튼2</button></li>
            </ul>
        </nav>
        </>
    )
}