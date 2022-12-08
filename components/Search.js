import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link'

export const SearchBar = ({ searchBar }) => {
  
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([]);
  const [check, checkItems] = useState("");
  
  useEffect(() => {
    setItems(searchBar.results);
  }, []);
  console.log("items");
  console.log(items);
  console.log("items");
  if (items === undefined) {
    return <h1>Loading....</h1>
  }
  return (<div className='ss' onClick={() => { checkItems("")}}>
    <div className="search">
      <div className='logo'>The Movie db</div>
      <input type="text" value={check} placeholder="seach..."
        onChange={(e) => {
          checkItems(e.target.value)
          return (
            setSearchTerm(e.target.value)
          )
        }} />
      <div className='child'>
        {items.filter((val) => {
          console.log("val val");
          console.log(val.data.slices[0].primary.title
            );
          console.log("val val");

          if (searchTerm == "") {
            return val
          }
          else if (val.data.slices[0].primary.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          console.log("check check");
          console.log(val.url);
          console.log("check check");

          if (check != "") {
            return <div onClick={() => { window.location.href = `http://localhost:3000${val.url}` }} key={key}> {val.data.slices[0].primary.title} </div>
          } else {
          }
        })}
      </div>
    </div>
  </div>
  );
}
