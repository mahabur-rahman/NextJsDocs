// import { useRouter } from "next/router";

// const BlogDetails = () => {
//   const router = useRouter();
//   console.log(router.query.details);
//   const url = router.query.details;

//   return (
//     <>
//       <h1>Blog Details Page : {url}</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
//         voluptas rem quisquam harum iste, iusto numquam perspiciatis praesentium
//         nobis et tempore? Nihil laudantium, nam eum repellat explicabo rem animi
//         numquam quod porro? Consequuntur animi, nisi veritatis, quod natus
//         inventore repellaitiis cumque aliquam beatae soluta voluptatem ea
//         delectus sunt ab dolorem dignissimo.
//       </p>
//     </>
//   );
// };

// export default BlogDetails;

// for details page show 👍
import Header from "../../components/Header";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        blogDetails: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.blogDetails;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const BlogDetails = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Header />
      <h1>Blog Details Page : </h1>
      <h3>{id}</h3>
      <h4>{title}</h4>
      <p>{body}</p>
    </>
  );
};

export default BlogDetails;
