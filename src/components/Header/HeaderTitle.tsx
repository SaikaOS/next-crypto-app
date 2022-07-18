import { FormEvent, useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLogoXbox } from "react-icons/io";
import { InputContext } from "../../App";

function HeaderTitle() {
  const {isActive, setIsActive} = useContext(InputContext)
  function handleClick(e: FormEvent<HTMLButtonElement>) {
    setIsActive(!isActive);
  }
  return (
    <div className="flex items-center justify-between pt-4">
      <IoLogoXbox className="w-8 h-8" />
      <h1 className="text-4xl">Shopping App</h1>
      <button onClick={handleClick}>
        <AiOutlineShoppingCart className="w-6 h-6" />
      </button>
    </div>
  );
}

export default HeaderTitle;
