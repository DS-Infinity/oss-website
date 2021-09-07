import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  hasSubmitted: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ hasSubmitted }) => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.imageDiv}>
        <img
          className={styles.image}
          src="/logo.png"
          alt="Logo"
          width="160"
          height="90"
        ></img>
      </div>
      <span className={styles.title}>Open Source Sunday Challenge</span>
      {!hasSubmitted ? (
        <button className={styles.button}>Participate Now</button>
      ) : (
        <button className={styles.button}>Edit Project</button>
      )}
    </div>
  );
};
