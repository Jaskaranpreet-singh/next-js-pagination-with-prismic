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
              return (
                <div className='card' key={index}>
                  <PrismicLink  field={page.data.slices[0].primary.link}>
                    <img src={page.data.slices[0].primary.img.url} alt="error" /> 
                  </PrismicLink>
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
     <div id='card-child'>
     {searchData.map((data,index)=>{
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