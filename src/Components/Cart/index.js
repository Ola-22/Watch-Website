import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
import Colors from "../Details/Colors";
import Sizes from "../Details/Sizes";
import "./style.css";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const deleteProduct = (id) => {
    if (window.confirm("Do you want to delete this product")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <h3>
      {cart.map((product) => (
        <div className="details cart" key={product._id}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${product.images[0]})` }}
          />
          <div className="box_details">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>
            <div className="amount">
              <button onClick={() => decrement(product._id)}> - </button>
              <span>{product.count}</span>
              {console.log(product.count)}
              <button onClick={() => increase(product._id)}> + </button>
            </div>
            <div className="delete" onClick={() => deleteProduct(product._id)}>
              ×
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <Link to="/payment">payment</Link>
        <h3>total: $ {total}</h3>
      </div>
    </h3>
  );
}
