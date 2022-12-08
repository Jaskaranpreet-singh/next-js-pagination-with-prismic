import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import Pagination from "../components/Pagination/index";
import Card from "../components/Card/index";

const Index = ({ page, navigation, settings,searchBar }) => {

    return (
      <Layout navigation={navigation} settings={settings} searchBar={searchBar}>
        <Head>
          {/* <title>{prismicH.asText(page?.data?.title)}</title> */}
        </Head>
  
        {/* {console.log(page.results[0].data.slices[0].items)} */}
        {/* {console.log(page.results)} */}
  
        <Card cardData={page.results} />
  
        <Pagination totalItems={page.total_pages} />
  
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
      </Layout>
    );
  

};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByType("page", {
    page: 1,
    pageSize: 8
  });
  const searchBar = await client.getByType("page")
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
