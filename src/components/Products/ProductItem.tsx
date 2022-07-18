import { useState } from "react";
import { Link } from "react-router-dom";
import { add, remove } from "../../store/slice/cartSlice";
import { useAppDispatch } from "../../store/store";

function ProductItem({ card}: any) {
  const [state, setState] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  function toggleClick() {
    setState(!state);
  }
  const addToCart = (card:any) => {
    toggleClick()
    dispatch(add(card))
  }

  const removeFromCart = ({id}:any) => {
    toggleClick()
    dispatch(remove({id}))
  }
  return (
    <>
      <div
        key={card.id}
        className="border-2 flex flex-col justify-around items-center h-[350px] rounded-xl p-4"
      >
        <Link to={`/products/${card.id}`}>
          <div className="flex flex-col items-center">
            <p>
              {card.title.length >= 25
                ? card.title.slice(0, 25) + "..."
                : card.title}
            </p>
            <img src={card.thumbnail} className="w-40 h-40 object-cover" />
            <p>${card.price}.99</p>
          </div>
        </Link>
        {state ? (
          <button
            className="border-2 bg-white text-black p-2 rounded-md"
            onClick={() => removeFromCart({id: card.id})}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="border-2 bg-black text-white p-2 rounded-md"
            onClick={() => addToCart(card)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}

export default ProductItem;
