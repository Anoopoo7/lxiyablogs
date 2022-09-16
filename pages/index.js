/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import HomePageLayout from "../layouts/homepageLayout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";

export async function getServerSideProps() {
  const all = await Client().query(
    Prismic.Predicates.at("document.type", "home_page")
  );
  return { props: { content: all.results[0].data } };
}

export default function Home({ content }) {
  return (
    <div className="html">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <HomePageLayout content={content} />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
    </div>
  );
}
