import styles from './Team.module.css'
import Title from '../../title/Title'
export default function Team() {

    return (
        <>
            <section id='team' className={styles.section}>
                <Title
                    message={"About Team"}
                    fontsize={"30px"}
                    decWidth={"100px"}
                    paddingB={"0"}
                />
                <div className={styles.section_content}>
                    <div className={styles.profile_descriptor}>
                        <Title
                            message={"Ortniel"}
                            fontsize={"20px"}
                            decWidth={"50px"}
                            paddingB={"0"}
                        />
                        <div className={styles.text}>
                            Welcome to the Maze Game!
                            This project is proudly developed by <span>Ortniel ADOUMASSE</span> ,
                            a Junior Software Engineer currently enhancing my skills through the ALX Software Engineering course.
                            With a passion for game design and a vision for a thrilling maze adventure,
                            I’ve poured creativity and effort into every aspect of this project.
                            I hope you enjoy playing as much as I enjoyed creating it!
                        </div>
                    </div>
                    <div className={styles.profile_container}>
                        <img src="/public/images/teams.png" alt="Picture" />
                    </div>

                </div>

            </section>
        </>
    )
}