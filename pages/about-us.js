import Header from "../components/Header";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>About us page</title>
        <meta
          name="about us description"
          content="Free Next Js Pro level work team 👍"
        />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next Js, React" />
        <meta name="author" content="Al Noman" />
      </Head>

      <Header />

      <h1 className="title">About Us Page | Image Component</h1>
      {/* <img src="/pc.jpg" alt="Image component" height="280" width="500" /> */}
      <Image src="/pc.jpg" width="500" height="300" />
      <br />
      <br />
      <Link href="/dataFetch">
        <a>Data Fetch :)</a>
      </Link>
    </>
  );
};

export default About;
