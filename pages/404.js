import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {
  // redirect on home page
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      // console.log("Back to home");
    }, 3000);
  }, []);

  const router = useRouter();
  // console.log(router);

  const redirectClick = () => {
    // router.push("/blog");
    // one way____ after 3s then redirect on blog page
    setInterval(() => {
      router.push("/blog");
      // console.log("Redirect on blog page after 3s");
    }, 3000);
  };

  return (
    <>
      <section id="error">
        <h1>Error Page</h1>
        <h4>Page Not Found !</h4>

        <Link href="/">
          <a>Back to Home</a>
        </Link>

        <br />
        <br />

        {/* button click and Redirect on home page 😄 */}
        <button type="button" onClick={() => router.push("/")}>
          Back to Home
        </button>

        <br />
        <br />

        <button type="button" onClick={redirectClick}>
          Redirect on Blog Page
        </button>
      </section>
    </>
  );
};

export default ErrorPage;
