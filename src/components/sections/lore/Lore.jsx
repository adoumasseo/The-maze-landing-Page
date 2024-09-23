import styles from './Lore.module.css'
import Title from '../../title/Title'

export default function Lore() {

    return (
        <>
            <section id='lore' className={styles.section}>
                <Title 
                    message={"Lore: The Maze Awaits"}
                    fontsize={"30px"}
                    decWidth={"100px"}
                    paddingB={"30px"}
                />
                <div className={styles.lore_text}>
                    In a world where time is your greatest enemy, Maze: The Renewals challenges you to navigate a labyrinth.
                    As the name suggests, this is not just a game of skill, but a test of wit, speed, and survival.
                    You find yourself trapped within a seemingly endless maze, armed with nothing but a compass and your instincts.
                    The clock is ticking. You have only two minutes to outsmart the maze and find the exit.
                    Each turn could lead you closer to freedom, or deeper into confusion. The walls shift, the air thickens, and the tension builds with every second.
                    Fail to escape, and the maze resets—tempting you to try again, to push harder, to conquer the challenge that looms before you.
                    Do you have what it takes to escape the maze before time runs out?
                    Or will you be forever lost in its twists and turns? There’s only one way to find out. The maze beckons. Will you answer?

                </div>
            </section>
        </>
    )
}