import { Route } from 'next'
import React from 'react'

type Props = {
    route: string
}

export default function HelloWorld({route}: Props) {
  return (
    <div>HelloWorld {route}</div>
  )
}
