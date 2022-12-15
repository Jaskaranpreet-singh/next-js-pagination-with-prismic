import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { decrement, increment,incrementByAmount } from '../components/redux/features/counter/counterSlice' 

export const SearchBar = ({ searchBar }) => {
  let data=[];
  // const [dataSearch,setdata]=useState([])
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  const [mapState, setMapState] = useState(new Map());
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([]);
  const [check, checkItems] = useState("");
  const [filter,setfilter]=useState("");

  
  useEffect(() => {
    setItems(searchBar.results);
  }, []);

  
  function fun(val) {
    data.push(val)
  }
  if (items === undefined) {
    return <h1>Loading....</h1>
  }
  return (<div className='ss' onClick={() => { checkItems("")}}>
    <div className="search">
      <div className='logo'>The Movie db</div>
      <div className='con'>

      <input type="text" value={check} placeholder="seach..."
        onChange={(e) => {
          checkItems(e.target.value);
          // dispatch(incrementByAmount(["jaskaaran"]))
        
          return (
            setSearchTerm(e.target.value)
          )
        }} />
         <button onClick={()=>{      
            dispatch(incrementByAmount(data))
        }} > <Link href="/search"> Search</Link>
        </button>
      
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
            return  ( 
              <PrismicLink  field={val.data.slices[0].primary.link}>
                <div key={key}>{val.data.slices[0].primary.title} </div>
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
