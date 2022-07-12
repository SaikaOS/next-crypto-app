import { FormEvent, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoLogoXbox } from 'react-icons/io'
import ShoppingCart from '../Products/ShoppingCart'

function HeaderTitle() {
  const [isActive, setIsActive] = useState<boolean>(true);
  function handleClick(e:FormEvent<HTMLButtonElement>) {
   setIsActive(!isActive)
  }
  return (
    <div className="flex items-center justify-between pt-4">
        <IoLogoXbox className="w-8 h-8" />
        <h1 className="text-4xl">Shopping App</h1>
        <button className='cursor-pointer' onClick={handleClick}>
        <AiOutlineShoppingCart className="w-6 h-6">
          <ShoppingCart isActive={isActive} setIsActive={setIsActive}/>
        </AiOutlineShoppingCart>
        </button>
      </div>
  )
}

export default HeaderTitle