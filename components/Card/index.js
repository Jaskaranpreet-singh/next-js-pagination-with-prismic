import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

import * as prismicH from '@prismicio/helpers'

const Card = ({ cardData }) => {
  // console.log(cardData)
  return (
    <section>
      <div id='card'>
        <div id='card-child'>
          {cardData.map((page, index) => {
            // console.log(page.data.slices[0].primary);
            return (
              <div className='card' key={index}>
               <a href={page.url}>
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
};

export default Card;