import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.symbolLoader}>
          <span className={styles.symbol} style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "5rem",
            color: "#ffffff",
            textShadow: "0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(56,189,248,0.4)",
            letterSpacing: "-2px",
          }}>A</span>
        </div>
        <div className={styles.progress} />
      </div>
    </div>
  );
};

export default Loader;
