import styles from "./Nursery.module.css"
function Nursery() {
    return (
        <>
            <h className={styles.school}>Do you go to school?</h>
            <p className={styles.nursery}>Nursery is fun!</p>
            <button className={styles.myButton}>Click Here</button>
        </>

    )
}
export default Nursery;