import { remove } from "../../store/slice/cartSlice";
import { useAppDispatch } from "../../store/store";
import { ICard } from "./ProductCard";

function CartItem({ id, title, price, thumbnail }: ICard) {  
  const dispatch = useAppDispatch()
  const removeFromCart = ({id}:any) => {
    dispatch(remove({id}))
  }
  return (
    <div className="flex flex-col h-[200px] justify-around items-center border-2 border-black">
        <div className="flex flex-col items-center">
        <p>{title}</p>
        <img src={thumbnail} className="h-20 object-cover" />
        <p>${price}.99</p>
        </div>
        <div>
        <button
            className="border-2 bg-black text-white p-1 rounded-md"
            onClick={() => removeFromCart({id: id})}
          >
            Remove from Cart
          </button>
        </div>
    </div>
  );
}

export default CartItem;
