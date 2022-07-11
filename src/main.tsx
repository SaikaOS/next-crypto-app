import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SingleItem from "../src/components/Products/SingleItem"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
);
