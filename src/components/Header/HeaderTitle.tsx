import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoLogoXbox } from 'react-icons/io'

function HeaderTitle() {
  return (
    <div className="flex items-center justify-between pt-4">
        <IoLogoXbox className="w-8 h-8" />
        <h1 className="text-4xl">Shopping App</h1>
        <AiOutlineShoppingCart className="w-6 h-6" />
      </div>
  )
}

export default HeaderTitle