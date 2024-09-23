import styles from './Usage.module.css'
import ReactPlayer from 'react-player'
import Title from '../../title/Title'

export default function Usage() {
    return (
        <>
            <section id='usage' className={styles.section}>
                <Title
                    message={"Game Info"}
                    fontsize={"30px"}
                    decWidth={"100px"}
                    paddingB={"0"}
                />
                <div className={styles.game_info_content}>
                    <ReactPlayer
                        url='/The-maze-landing-Page/videos/ray.webm'
                        height="350px"
                        width="600px"
                        loop={true}
                        controls={false}
                        volume={0}
                        playing={true}
                    />
                    <div className={styles.usage_section}>
                        <Title
                            message={"Usage"}
                            fontsize={"20px"}
                            decWidth={"50px"}
                            paddingB={"0"}
                        />
                        <div className={styles.explain_text}>
                            In this clip, you’ll see the player navigating the maze,
                            utilizing the controls to find the exit before time runs out.
                            Follow along to learn how to maneuver and strategize your way to victory!
                            The True maps won't be that easy :))
                        </div>
                        <ul>
                            <li><span>WASD</span> : To move Around</li>
                            <li><span>Left Arrow / Mouse left </span> : To rotate Left</li>
                            <li><span>Right Arrow / Mouse Right</span> : To rotate Right</li>
                            <li><span>ESC</span> : To pause and quit the game.</li>
                            <li><span>ESC</span> : To quit the maze when you reach the exit wall.</li>
                        </ul>
                    </div>
                </div>


            </section>
        </>
    )
}