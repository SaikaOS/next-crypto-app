import React from 'react'

function ShoppingCart({isActive, setIsActive}:any) {
  return (
    <div className={isActive ? 'flex w-[400px] bg-gray-400' : 'hidden'}>
      <h1>hello</h1>
    </div>
  )
}

export default ShoppingCart