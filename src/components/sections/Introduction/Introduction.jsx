import Header from '../../header/Header'
import styles from './Introduction.module.css'

export default function Introduction() {

    return (
        <>
            <section id='intro' className= {styles.section}>
                <Header/>
                <div>
                    <div className= {styles.logo}>Maze: The Renewals</div>
                    <a href="https://github.com/adoumasseo" className= {styles.link}>Try it</a>
                </div>
                
            </section>
        </>
    )
}