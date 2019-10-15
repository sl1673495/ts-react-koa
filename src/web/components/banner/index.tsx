import * as React from 'react'
import { useFetch } from 'react-hooks-fetch'

const Banner = () => {
  const { error, data } = useFetch('/api/hello')
  console.log('data: ', data);
  return data ? <div>{data.data}</div> : <span>loading...</span>
}

export default Banner
