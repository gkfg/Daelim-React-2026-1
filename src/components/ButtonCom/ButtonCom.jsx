import styles from './ButtonCom.module.css'
export default function ButtonCom(){
    return(
        <>
        <title className={styles.title}>Button</title>
        <nav className={styles.navBar}>
            <ul>
                <li><button className={styles.button}>버튼1</button></li>
                <li><button className={styles.button}>버튼2</button></li>
            </ul>
        </nav>
        </>
    )
}