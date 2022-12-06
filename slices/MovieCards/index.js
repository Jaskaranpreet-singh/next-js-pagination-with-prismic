import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.MovieCardsSlice} MovieCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MovieCardsSlice>} MovieCardsProps
 * @param { MovieCardsProps }
 */
const MovieCards = ({ slice }) => (
  <section>
    <div id="card">
      <div id='card-child'>
        {
          slice?.items?.map((item, i) => {
            return (
              <div className="card">
                <PrismicLink field={item.llink}>
                  <img src={item.image.url} alt={item.image.alt} />
                </PrismicLink>
                <h1>{item.title}</h1>
                <PrismicRichText field={item.overview} />
                <PrismicRichText field={item.popularity} />
                <PrismicRichText field={item.release_date} />
              </div>
            )
          }
          )
        }
      </div>
    </div>
  </section>
)

export default MovieCards