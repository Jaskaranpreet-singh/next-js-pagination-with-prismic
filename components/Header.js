import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link' 
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import {SearchBar} from "./Search"

export const Header = ({ navigation, settings, searchBar }) => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <a href={navigation.data.links.url}>
            <PrismicRichText field={navigation.data.text} />
          </a>
        </ul>
      </nav>
      <SearchBar  searchBar={searchBar}/>  
    </div>
  );
};
