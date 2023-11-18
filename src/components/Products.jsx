import "../styles/card.css"
import '../styles/index.css'

import React from 'react'

function Products({ result }) {
  return (
    <div className="flexCenter c-wrapper">
        {result}
    </div>
  )
}

export default Products;