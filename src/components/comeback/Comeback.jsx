import styles from './Comeback.module.css';
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Comeback() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      title='Go to the top' 
      className={styles.comeback}
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    >
      <FaArrowAltCircleUp size={40}/>
    </div>
  );
}