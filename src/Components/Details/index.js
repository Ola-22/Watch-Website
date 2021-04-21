import { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";
import Sizes from "./Sizes";
import "./style.css";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${product.images[index]})` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
            ref={imgDiv}
          />
          <div className="box_details">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>
            <DetailsThumb images={product.images} setIndex={setIndex} />
            <Link
              to="/cart"
              className="cart"
              onClick={() => addCart(product._id)}
            >
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
