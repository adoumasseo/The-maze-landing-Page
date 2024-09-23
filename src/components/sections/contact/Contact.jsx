import styles from './Contact.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Title from '../../title/Title';

export default function Contact() {
    return (
        <>
            <section id='contact' className={styles.section}>
                <Title
                    message={"Contact Us"}
                    fontsize={"30px"}
                    decWidth={"100px"}
                    paddingB={"0"}
                />
                <div className={styles.content}>
                    <a href="https://github.com/adoumasseo"><FaGithub size={40} className={styles.icon}/></a>
                    <a href="https://www.linkedin.com/in/ortniel-adoumasse/"><FaLinkedin size={40} className={styles.icon}/></a>
                    <a href="https://twitter.com/OrtnielA"><FaSquareXTwitter size={40} className={styles.icon}/></a>
                    <a href="mailto:adoumasseo@gmail.com"><MdEmail size={50} className={styles.icon}/></a>    
                </div>
            </section>
        </>
    )
}