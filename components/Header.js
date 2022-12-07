import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";


export const Header = ({ navigation, settings, searchBar }) => {
  console.log("------------------------");
  console.log(searchBar);
  console.log("------------------------");

  return (
    <div className="navbar">
      <nav>
        <ul>
          <a href={navigation.data.links.url}>
            <PrismicRichText field={navigation.data.text} />
          </a>
        </ul>
        <h1>Search Bar</h1>
      </nav>
    </div>
  );
};
