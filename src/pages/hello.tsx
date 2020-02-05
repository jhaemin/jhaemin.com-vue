import React from 'react'
import Link from 'next/link'

const Hello: React.FC = () => {
  return (
    <div>
      <h1>Hello Page</h1>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  )
}

export default Hello
