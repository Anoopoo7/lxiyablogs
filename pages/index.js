/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import HomePageLayout from "../layouts/homepageLayout";
import {
  getPageContentByPageType,
  getFeaturedItems,
} from "../services/staticContentService";

export async function getServerSideProps() {
  const content = await getPageContentByPageType("HOME");
  const featured = await getFeaturedItems();
  return { props: { content, featured } };
}

export default function Home({ content, featured }) {
  return (
    <div className="html">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <HomePageLayout
        content={content?.data?.content}
        featured={featured?.data}
      />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
    </div>
  );
}
