import { createContext, FormEvent, useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/Products/ProductCard";

export const InputContext = createContext<any>({});

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
  };
  return (
    <InputContext.Provider value={{ inputValue, setInputValue, handleChange }}>
      <div className="container mx-auto max-w-[1080px]">
        <Header />
        <ProductCard />
      </div>
    </InputContext.Provider>
  );
}

export default App;
