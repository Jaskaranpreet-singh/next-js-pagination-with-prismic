import Head from "next/head";
import { Layout } from "../../components/Layout";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination/index";
import { createClient } from "../../prismicio";

import { useRouter } from 'next/router'

const page = ({ testimonials, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      {console.log(testimonials.results)}
      <Card cardData={testimonials.results} />
      <Pagination totalItems={testimonials.total_pages} />
    </Layout>
  );
};

export default page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const testimonials = await client.getByType("page", {
    page: params?.id || 1,
    pageSize: 8,
  });
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");
  // const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      testimonials,
      settings,
      navigation
    },
  };
}

export async function getStaticPaths({ params, context }) {
  const client = createClient();

  const testimonials = await client.getByType("page", {
    page: params?.id || 1,
    pageSize: 8,
  });


  const total_pages = testimonials?.total_pages || 1
  const paths = [];
  for (let i = 1; i <= total_pages; i++) {
    paths.push({ params: { id: String(i) } })
  }

  return {
    paths: paths,
    fallback: false,
  };
}


