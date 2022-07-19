import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  images: string[];
}

function SingleItem() { 
  const {id} = useParams();
  const [item, setItem] = useState<Item>();
  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const products  = await res.json();
    setItem(products);
  };
  fetchData();
  return (
    <div className="flex justify-around items-center min-h-screen">
      <div>
      <h1>{item?.title}</h1>
      <p>{item?.description}</p>
      <p>{item?.price}</p>
      <p>{item?.brand}</p>
      <p>{item?.category}</p>
      </div>
      <div className="flex justify-around flex-wrap w-[500px]">
        {item?.images.map((image) => (
          <img
          key={image}
            src={image}
            className="w-[150px] h-[150px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default SingleItem;
