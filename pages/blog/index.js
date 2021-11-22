import Header from "../../components/Header";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <h1 style={{ color: "blue", fontSize: "5rem", fontWeight: 700 }}>
        Blog Page
      </h1>
      {/* array map */}
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <Link href={`/blog/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
