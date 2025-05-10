import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Kenyon Magic</title>
        <meta name="description" content="Unforgettable magic for events, trade shows, weddings, and parties." />
      </Head>
      <header className={styles.header}>
        <h1>James Kenyon Magic</h1>
        <p>Captivating performances for trade shows, events, and private parties.</p>
        <a href="#contact" className={styles.cta}>Book Now</a>
      </header>
      <footer className={styles.footer}>
        <h2>Available In:</h2>
        <ul>
          <li><Link href="/austin-magician">Austin</Link></li>
          <li><Link href="/dallas-magician">Dallas</Link></li>
          <li><Link href="/houston-magician">Houston</Link></li>
        </ul>
      </footer>
    </div>
  );
}
