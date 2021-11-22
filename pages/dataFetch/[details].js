import Header from "../../components/Header";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        details: curElem.id.toString(), // must be same [details]
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// To get an id

export const getStaticProps = async (context) => {
  const id = context.params.details;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Details = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Header />
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          margin: "4rem 0",
          fontWeight: 700,
        }}
      >
        Dynamic Details Page
      </h1>
      <div
        style={{
          textAlign: "  center",
          background: "lightblue",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ fontSize: "5em", fontSize: "bold" }}>{data.id}</h2>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </>
  );
};

export default Details;
