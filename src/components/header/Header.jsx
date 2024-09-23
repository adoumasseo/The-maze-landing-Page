import styles from './Header.module.css'

export default function Header(){
    return (
        <>
            <header className={styles.header}>
                <a href = "#intro" className={styles.logo}>Maze</a>
                <div className={styles.link_container}>
                    <a href = "#lore" className={styles.link}>Lore</a>
                    <a href = "#usage" className={styles.link}>Usage</a>
                    <a href = "#team" className={styles.link}>About team</a>
                    <a href = "#contact" className={styles.link}>Contact Us</a>
                </div>
            </header>
        </>
    )
}