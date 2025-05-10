import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function CityPage({ city }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{city} Magician | James Kenyon Magic</title>
        <meta name="description" content={`Hire a professional magician in ${city} for your next event.`} />
      </Head>
      <main>
        <h1>Magician in {city}</h1>
        <p>Book James Kenyon to amaze your guests in {city}. Perfect for corporate events, trade shows, and more.</p>
        <a href="/#contact" className={styles.cta}>Get in Touch</a>
      </main>
    </div>
  );
}
