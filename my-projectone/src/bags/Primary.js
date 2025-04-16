import styles from "./Primary.module.css"
function Primary(){
    return(
        <>
        <h1 className={styles.myClass}>Which class are you?</h1>
        <p className={styles.myLevel}>I'm in Primary class. </p>
        </>
    )
}
export default Primary;
