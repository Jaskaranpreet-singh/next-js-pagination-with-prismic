import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { decrement, increment, incrementByAmount } from '../components/redux/features/counter/counterSlice'

export const SearchBar = ({ searchBar }) => {
  let data = [];
  // const [dataSearch,setdata]=useState([])
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [mapState, setMapState] = useState(new Map());
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([]);
  const [check, checkItems] = useState("");
  const [filter, setfilter] = useState("");

  function fun(val) {
    data.push(val)
  }

  useEffect(() => {
    setItems(searchBar.results);
  }, []);

  useEffect(() => {
    var input = document.getElementById("myInput");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        dispatch(incrementByAmount(data))
        window.location.href = "/search"
      }
    });
  })

  if (items === undefined) {
    return <h1>Loading....</h1>
  }
  return (<div className='ss' onClick={() => { checkItems("") }}>
    <div className="search">
      <div className='logo'>The Movie db</div>
      <div className='con'>

        <input id='myInput' type="text" value={check} placeholder="seach..."
          onChange={(e) => {
            checkItems(e.target.value);
            return (
              setSearchTerm(e.target.value)
            )
          }}

        />
        <Link href="/search"> <button onClick={() => {
          dispatch(incrementByAmount(data))
        }} >  Search
        </button></Link>

      </div>

      <div className='child'>
        {items.filter((val) => {

          if (searchTerm == "") {
            return val
          }
          else if (val.data.slices[0].primary.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {

          if (check != "") {
            fun(val)
            return (
              <PrismicLink key={key} field={val.data.slices[0].primary.link}>
                <div> <h3>{val.data.slices[0].primary.title}</h3  ></div>
              </PrismicLink>
            )
          } else {
          }
        })}
      </div>
    </div>
  </div>
  );
}
