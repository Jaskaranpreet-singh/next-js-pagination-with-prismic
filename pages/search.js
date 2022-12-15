import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Link from 'next/link' 
import { useSelector, useDispatch } from 'react-redux'
import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import Pagination from "../components/Pagination/index";
import Card from "../components/Card/index";
import { Counter } from "../components/redux/features/counter/Counter";

const Index = ({search}) => {
  const count = useSelector((state) => state.counter.value)
  return (
    <>
      <Link href="/"><h1>Home</h1></Link>
    <div id="Search-poster">
      <img src={search.data.img.url} />
    </div>
     <h1 >{ search.data.tittle }</h1>
     <h1>Search Result</h1>
    <Card  searchData={count} />
    </>
  );
};
export default Index;
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  
  // const searchBar = await client.getByType("page")
  const search = await client.getSingle("search");
  // const settings = await client.getSingle("settings",);

  return {
    props: {
      search
    },
  };
}
