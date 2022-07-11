import { FormEvent } from "react";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";
import MySelect from "../UI/MySelect";

function HeaderForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
