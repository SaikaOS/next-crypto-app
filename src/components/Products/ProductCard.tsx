import { useContext, useEffect, useState } from "react";
import { InputContext } from "../../App";
import { useFetch } from "../hooks/useFetch";
import ProductItem from "./ProductItem";

export interface ICard {
  id?: number;
  title: string;
  price: number;
  thumbnail: string;
}

function ProductCard() {
  const [cards, setCards] = useState<ICard[]>([]);
  const { inputValue } = useContext(InputContext);
  const { isSubmitted } = useContext(InputContext);
  const filteredCards = cards.filter((card: ICard) => {
    return card.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  useEffect(() => {
    useFetch("https://dummyjson.com/products?&limit=20", setCards);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
      {isSubmitted
        ? filteredCards.map((card: ICard) => (
            <ProductItem key={card.id} card={card} />
          ))
        : cards.map((card: ICard) => <ProductItem key={card.id} card={card} />)}
    </div>
  );
}

export default ProductCard;
