import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import data from '../assets/data'

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <div className='cocktails-center'>
        {data.products.map((product) => {
          return <Cocktail key={product.slug} product={product} />
        })}
      </div>
    </section>
  )
}
