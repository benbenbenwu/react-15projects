import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  /* const catchAsync = fn => () => fn().catch(err => setLoading(true))

  useEffect(catchAsync(async () => {
    setLoading(true)
    await fetch('https://course-api.com/react-tours-project')
      .then(res => res.json())
      .then(all => setTours(all))
    setLoading(false)
  }), [tours]) */

  return loading
    ? <main><Loading /> </main>
    : <main><Tours /></main>
}

export default App
