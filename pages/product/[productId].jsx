/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { useMemo } from "react";
import ProductDescriptionpage from "../../layouts/productDescriptionPage";
import {
  getProductByUrl,
  getProductInventoryById,
} from "../../services/productServices";

export async function getStaticPaths() {
  const res = [
    "marko-polo-jeans-(black)",
    "marko-polo-jeans-(Red)",
    "Men-Regular-Fit-Striped-Spread-Collar-Casual-Shirt",
    "Men-Regular-Fit-Solid-Button-Down-Collar-Casual-Shirt",
    "Women-Printed-A-line-Black-Skirt",
  ];
  const paths = res.map((url) => {
    return {
      params: { productId: url },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getProductByUrl("/" + params.productId);
  return { props: { products } };
}

const ProductPage = ({ products }) => {
  const [product] = products?.data || [];
  const { id } = product || {};
  const productInventory = useMemo(async () => {
    const response = await getProductInventoryById(id);
    if (response?.data) return response.data;
  }, [id]);
  return (
    <div className="html">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <ProductDescriptionpage
        products={products}
        productInventory={productInventory}
      />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
    </div>
  );
};

export default ProductPage;
