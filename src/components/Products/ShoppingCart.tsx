import { FormEvent } from "react";
import { useAppSelector } from "../../store/store";
import CartItem from "./CartItem";

function ShoppingCart({ isActive, setIsActive }: any) {
  const { cart } = useAppSelector((state) => state);
  function handleClick(e: FormEvent<HTMLButtonElement>) {
    setIsActive(!isActive);
  }
  return (
    <div
      className={
        isActive
          ? "block w-[400px] min-h-full bg-zinc-100  z-10 absolute top-0 right-0"
          : "hidden"
      }
    >
      <div className="grid grid-cols-1 gap-6 p-6">
        <div className="flex items-center justify-between">
        <h1 className="text-3xl text-center">Shopping Cart</h1>
        <button onClick={handleClick}>X</button>
        </div>
        {cart.length === 0 ? (
          <div>Cart is empty :(</div>
        ): cart.map((item) => (
          <CartItem key={item.id} id={item.id} title={item.title} 
          price={item.price} thumbnail={item.thumbnail} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
