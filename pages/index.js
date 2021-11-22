import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      {/* next head component use  */}

      <Head>
        <title>Home Page :)</title>
        <meta name="description" content="Free Next Js Tutorials 😄" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next Js" />
        <meta name="author" content="Mahabur Rahman" />
      </Head>
      {/* end of next head component */}
      <section id="header">
        <Header />

        <h1 className={styles.heading}>Home page</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, velit maiores aspernatur porro saepe dolores?
        </p>
      </section>

      <style jsx>
        {`
          p {
            color: blue;
            font-size: 1.3rem;
          }
        `}
      </style>

      <style jsx>
        {`
          .text {
            background-color: lime;
            padding: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default Home;
