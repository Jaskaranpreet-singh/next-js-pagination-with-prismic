import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";

const Page = ({ page, navigation, settings,searchBar }) => {
  return (
    <Layout navigation={navigation} settings={settings} searchBar={searchBar}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  
  const searchBar = await client.getByType("page")
  const page = await client.getByUID("page", params.uid, );
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings", );

  return {
    props: {
      page,
      navigation,
      settings,
      searchBar
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
