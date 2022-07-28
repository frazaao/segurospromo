import styles from './styles.module.css'

export default function ColoredSeparator() {
    return (
        <div className={styles.separator}>
            <div className={styles.green100}></div>
            <div className={styles.purple}></div>
            <div className={styles.yellow}></div>
            <div className={styles.green700}></div>
        </div>
    )
}