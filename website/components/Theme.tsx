import styles from '../styles/Theme.module.css';

export const Theme = () => {
  return (
    <div className={styles.theme}>
      <div className={styles.main}>
        <div className={styles.title}>Theme</div>
        <div className={styles.description}>
          <br />
          Challenge: In simple words, you have to build a website for our
          Open-Source-Sunday challenge!
          <br /><br />
          Check the <a href="https://discord.gg/58HGKNpnJ9" className={styles.link}>Discord</a> for more details.
        </div>
      </div>
    </div>
  );
};
