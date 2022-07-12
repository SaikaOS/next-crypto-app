import { FormEvent, useContext } from "react";
import { InputContext } from "../../App";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";
import MySelect from "../UI/MySelect";

function HeaderForm() {
  const { isSubmitted, setIsSubmitted } = useContext(InputContext);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };
  return (
    <form
      className="flex items-center justify-around h-full w-full"
      onSubmit={handleSubmit}
    >
      <MyInput />
      <MyButton />
      <MySelect />
    </form>
  );
}

export default HeaderForm;
