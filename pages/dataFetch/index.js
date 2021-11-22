import Header from "../../components/Header";
import Head from "next/head";
import styles from "../../styles/dataFetch.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    props: {
      explore: data.slice(0, 5),
    },
  };
};

const DataFetch = ({ explore }) => {
  console.log(explore);
  const router = useRouter();
  //   const handleRoute = () => {
  //     router.push("/about-us");
  //   };
  // const uniquePageId = router.query.details
  //   console.log(props.data);
  //   const { data } = props;

  return (
    <>
      <Head>
        <title>Data Fetch With getStaticProps 💯</title>
        <meta
          name="Using real api json placeholder for data fetching...."
          content="Free Next Js Pro level work team 👍"
        />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next Js, React" />
        <meta name="author" content="Mahabur Rahman" />
      </Head>
      <Header />
      <br />
      <h1
        style={{
          color: "blue",
          fontSize: "3rem",
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        Data Fetch using getStaticProps in Next Js
      </h1>

      {/* data fetch map method start */}

      {explore.map((curElem) => {
        return (
          <div
            key={curElem.id}
            className={`${styles.flex} ${styles.bg}`}
            // onClick={handleRoute}
          >
            <Link href={`/dataFetch/${curElem.id}`}>
              <a>
                <h1 className={styles.id}>{curElem.id}</h1>
                <h3 className={styles.headingClr}>{curElem.title}</h3>
              </a>
            </Link>
          </div>
        );
      })}

      <style jsx>
        {`
          p {
            color: #fff;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
      {/* data fetch map method end */}
    </>
  );
};

export default DataFetch;
