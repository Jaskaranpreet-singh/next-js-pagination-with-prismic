import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

import * as prismicH from '@prismicio/helpers'

const Card = ({ cardData ,searchData }) => {
  if (cardData != undefined) {
    return (
      <section>
        <div id='card'>
          <div id='card-child'>
            {cardData.map((page, index) => {
              // console.log(page.data.slices[0].primary);
              return (
                <div className='card' key={index}>
                 <a href={page.url }>
                 <img src={page.data.slices[0].primary.img.url} alt="error" /> 
                 </a>
                 <h1>{page.data.slices[0].primary.title}</h1>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>
    );
  }
  if (searchData=="") {
    return (
      <h1>Data is not found</h1>
    )
  }
  else 
  return(
    <div id='card'>
     { console.log(searchData)}
     <div id='card-child'>
     {searchData.map((data,index)=>{
      
      console.log(data.data.slices[0].primary.title);  
      return (
        <div  className='card' key={index}>
      <img src={data.data.slices[0].primary.img.url} alt={data.data.slices[0].primary.img.alt} />
      <h1>{data.data.slices[0].primary.title}</h1>
      </div>
      )
    })}
    </div>
     
      </div>
  )

};
  
export default Card;