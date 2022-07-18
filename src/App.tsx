import { createContext, FormEvent, useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import ProductCard from "./components/Products/ProductCard";
import ShoppingCart from "./components/Products/ShoppingCart";
import { store } from "./store/store";

export const InputContext = createContext<any>({});

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
    setIsSubmitted(false);
  };
  return (
    <Provider store={store}>
      <InputContext.Provider
      value={{
        inputValue,
        setInputValue,
        handleChange,
        isSubmitted,
        setIsSubmitted,
        isActive,
        setIsActive,
      }}
    >
      <div className="container mx-auto max-w-[1080px]">
        <Header />
      <ShoppingCart isActive={isActive} setIsActive={setIsActive}/>
        <ProductCard />
      </div>
    </InputContext.Provider>
    </Provider>
  );
}

export default App;
