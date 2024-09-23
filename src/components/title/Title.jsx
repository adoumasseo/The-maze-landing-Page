import styles from './Title.module.css'
import UseIsMobile from '../hooks/UseIsMobile'

export default function Title({ message, fontsize, decWidth, paddingB }) {
    const isMobile = UseIsMobile();
    const Title_style = {
        fontSize: isMobile ? '1rem' : fontsize,
        paddingBottom: paddingB
    }
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title_decoration} style={{width: isMobile ? '20%' : decWidth}}></div>
                <div
                    style={Title_style}>
                    {message}
                </div>
                <div className={styles.title_decoration} style={{width: isMobile ? '20%' : decWidth}}></div>
            </div>
        </>
    )
}