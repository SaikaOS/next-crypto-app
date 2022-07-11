import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

interface Item {
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  images: string[];
}

function SingleItem() {
  let id = useParams();
  const [item, setItem] = useState<Item>();
  useEffect(() => {
    useFetch(`https://dummyjson.com/products/${id.id}`, setItem);
  }, []);
  return (
    <div>
      <h1>{item?.title} </h1>
      <p>{item?.description}</p>
      <p>{item?.price}</p>
      <p>{item?.brand}</p>
      <p>{item?.category}</p>
      <div className="flex justify-around">
        {item?.images.map((image) => (
          <img
            src={image}
            width="200px"
            height="200px"
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default SingleItem;
