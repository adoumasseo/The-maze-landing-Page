import styles from './Title.module.css'

export default function Title({ message, fontsize, decWidth, paddingB }) {
    const Title_style = {
        fontSize: fontsize,
        paddingBottom: paddingB
    }
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title_decoration} style={{width: decWidth}}></div>
                <div
                    style={Title_style}>
                    {message}
                </div>
                <div className={styles.title_decoration} style={{width: decWidth}}></div>
            </div>
        </>
    )
}