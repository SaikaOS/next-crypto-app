import { useContext } from "react";
import { InputContext } from "../../App";

function MyInput() {
  const { inputValue, handleChange } = useContext(InputContext);
  
  return (
    <input
      type="text"
      className="w-[500px] p-2 border-2 border-gray-300 rounded-md"
      placeholder="I am looking for..."
      onChange={handleChange}
      value={inputValue}
    />
  );
}

export default MyInput;
