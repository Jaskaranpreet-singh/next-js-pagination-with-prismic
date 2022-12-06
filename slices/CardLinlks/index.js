import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CardLinlksSlice} CardLinlksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardLinlksSlice>} CardLinlksProps
 * @param { CardLinlksProps }
 */
const CardLinlks = ({ slice }) => (
  <section>
    <div id='card'>
      <div className='card'>
        <img src={slice.primary.img.url} alt={slice.primary.img.alt} />
        <h1>{slice.primary.title}</h1>
      </div>
    </div>

  </section>
)

export default CardLinlks