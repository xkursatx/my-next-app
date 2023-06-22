import styles from "./page.module.css";

export default function Home() {
  const handleNameChange = () => {
    const names = ["isim1", "isim2", "isim3"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.js</code>
        <p>Merhaba {handleNameChange()}</p>
      </div>
    </main>
  );
}
