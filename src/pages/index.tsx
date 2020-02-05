import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>jhaemin.com</h1>
      <Link href="/hello">
        <a>Go to Hello</a>
      </Link>
      <style jsx>{`
        h1 {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Home
