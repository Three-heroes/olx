import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./Home.css";

const categories = [
  {
    to: "детский мир",
    backgroundColor: "#ffce32",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
    title: "Детский мир",
  },
  {
    to: "недвижимость",
    backgroundColor: "#3a77ff",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
    title: "Недвижимость",
  },
  {
    to: "транспорт",
    backgroundColor: "#23e5db",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
    title: "Транспорт",
  },
  {
    to: "работа",
    backgroundColor: "#ff5636",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
    title: "Работа",
  },
  {
    to: "животные",
    backgroundColor: "#fff6d9",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
    title: "Животные",
  },
  {
    to: "дом и сад",
    backgroundColor: "#ceddff",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
    title: "Дом и сад",
  },
  {
    to: "электроника",
    backgroundColor: "#c8f8f6",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
    title: "Электроника",
  },
  {
    to: "бизнес и услуги",
    backgroundColor: "#ffd6c9",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
    title: "Бизнес и услуги",
  },
  {
    to: "мода и стиль",
    backgroundColor: "#ffce32",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
    title: "Мода и стиль",
  },
  {
    to: "хобби отдых и спорт",
    backgroundColor: "#ceddff",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
    title: "Хобби отдых и спорт",
  },
  {
    to: "отдам даром",
    backgroundColor: "#c8f8f6",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
    title: "Отдам даром",
  },
  {
    to: "обмен",
    backgroundColor: "#ffd6c9",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
    title: "Обмен",
  },
];

const Home = () => {
  return (
    <Fade>
      <div className="container py-5">
        <h1 className="text-center">Main Categories</h1>
        <div className="categories">
          {categories.map((v) => (
            <Link to={v.to} className="category">
              <div
                className="circle"
                style={{ backgroundColor: v.backgroundColor }}
              >
                <img src={v.img} alt="" className="" />
              </div>
              <span>{v.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </Fade>
  );
};
export default Home;
