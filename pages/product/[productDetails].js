import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const detailsId = router.query.productDetails;
  return (
    <>
      <h1>Product Details Page : {detailsId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque
        nulla, aut deserunt veritatis, est laborum blanditiis ipsum quia
        aspernatur tempora soluta asperiores impedit saepe atque id eum sunt
        repellendus ipsam quasi dignissimos natus. Maiores perspiciatis tempora
        aspernatur iste nisi enim, aliquam veniam deserunt id necessitatibus
        molestias est voluptatibus impedit!
      </p>

      {/* back to home page */}
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </>
  );
};

export default ProductDetails;
