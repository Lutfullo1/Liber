import React from "react";
import { productData } from "../../data/data";
import { productData2 } from "../../data/data";

import { useParams } from "react-router-dom";
import { MainLayout } from "../../layout/main-layout";
import { Link } from "react-router-dom";
import "./product-detail.scss";

export const ProductDetail = () => {
  const params = useParams();
  let result = productData.find((obj) => obj.id === Number(params.slug));
  if (!result) {
    result = productData2.find((obj) => obj.id === Number(params.slug));
  }
  return (
    <MainLayout>
      <div className="container">
        <div className="home_link">
          <Link to="/">Бош сахифа /</Link>Китоблар
        </div>
        <div className="product_card">
          <div className="product_img">
            <img src={result.img} alt="" />
          </div>
          <div className="product_content">
            <div className="top">
              <div className="title_block">
                <h2 className="product_title">{result.title}</h2>
                <p className="product_text">{result.desc}</p>
              </div>
              <img src={result.rating} alt="" />
              <img src={result.headphone} alt="" />
            </div>
            <div className="bottom">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="bottom__list">
                <div>
                  <p className="bottom_title">Муаллиф</p>
                  <p className="bottom_text">Kevin Smiley</p>
                </div>
                <div>
                  <p className="bottom_title">Нашриёт</p>
                  <p className="bottom_text">Wepress Inc.</p>
                </div>
                <div>
                  <p className="bottom_title">Йил </p>
                  <p className="bottom_text">1999</p>
                </div>
              </div>

              <ul className="options">
                <li className="options_list">Сотиб олиш - 65 000 сум</li>
                <li className="options_list">Аудио тинглаш - 55 000 сум</li>
                <li className="options_list">Онлайн укиш - 45 000 сум</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="desc_block">
          <div className="left_side">
            <ul className="info_side">
              <li>Маълумотлар</li>
              <li>Китоб номи</li>
              <li>Муаллиф</li>
              <li>ISBN</li>
              <li>Тил</li>
              <li>Сахифалар</li>
              <li>Чоп этилган сана</li>
              <li>Нашриёт</li>
              <li>Рукн</li>
            </ul>
            <ul className="comment_side">
              <li>Фикрлар</li>
              <li>Элжернга аталган гуллар</li>
              <li>Даниел КИЗ</li>
              <li>121341381648 (ISBN13: 121341381648)</li>
              <li>Ўзбек</li>
              <li>450</li>
              <li>Апрель 7, 1999</li>
              <li>Wepress Inc.</li>
              <li>SIYOSAT</li>
            </ul>
          </div>
          <div className="same_books">
            <h4 className="main_title">Ўхшаш китоблар</h4>
            {productData.slice(0, 3).map((item) => {
              return (
                <div className="same_books__card">
                  <div className="same_books__img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="same_books__content">
                    <h4 className="same_books__title">{item.title}</h4>
                    <p className="same_books__text">{item.desc}</p>
                    <img
                      style={{ maxWidth: "50px" }}
                      src={item.rating}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
            <button className="same_btn">Кўпроқ</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
