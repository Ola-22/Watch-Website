import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Watch Product 01",
      images: [
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://cdn.shopify.com/s/files/1/0020/2116/3107/products/WINNER-Mens-Wrist-Watch-Top-Brand-Luxury-Men-Military-Sport-Clock-Hand-Wind-Mechanical-Watches-Male_845df524-45f3-4395-8b44-cfe5e9166dfc.jpg?v=1552501810",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 101,
    },
    {
      _id: "2",
      title: "Watch Product 02",
      images: [
        "https://cdn.shopify.com/s/files/1/0020/2116/3107/products/WINNER-Mens-Wrist-Watch-Top-Brand-Luxury-Men-Military-Sport-Clock-Hand-Wind-Mechanical-Watches-Male_845df524-45f3-4395-8b44-cfe5e9166dfc.jpg?v=1552501810",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
    },

    {
      _id: "3",
      title: "Watch Product 03",
      images: [
        "https://scontent.fjrs2-2.fna.fbcdn.net/v/t1.6435-9/152611845_3737782573004128_2842671795570389859_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=J2tHo8Rh4-EAX8WH6zz&_nc_ht=scontent.fjrs2-2.fna&oh=c051f0bd75244f224bdbf31bb539b4d6&oe=609AED36",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
    },

    {
      _id: "4",
      title: "Watch Product 04",
      images: [
        "https://scontent.fjrs2-2.fna.fbcdn.net/v/t1.18169-9/21077710_1469820453064586_1137599043226847711_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=MkUBKyoDGyoAX-19u39&_nc_ht=scontent.fjrs2-2.fna&oh=57301a7dbc78277b489661f2ee75ec40&oe=60993171",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
    },

    {
      _id: "5",
      title: "Watch Product 05",
      images: [
        "https://scontent.fjrs2-2.fna.fbcdn.net/v/t1.18169-9/20258079_480472785637149_7525123778300115682_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=tXuZQL9j0igAX8Pf-i_&_nc_ht=scontent.fjrs2-2.fna&oh=f2a48ad272d15649605a79c7a984a3c0&oe=60999E88",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://scontent.fjrs2-2.fna.fbcdn.net/v/t1.18169-9/17022189_1121169874661097_7123903395885465286_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=9267fe&_nc_ohc=sa4CZ25peikAX-9i_4M&_nc_ht=scontent.fjrs2-2.fna&oh=736d740ac67f11449f772f636323bde5&oe=609AA320",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
    },

    {
      _id: "6",
      title: "Watch Product 06",
      images: [
        "https://scontent.fjrs2-2.fna.fbcdn.net/v/t1.18169-9/19665491_737105593081194_5914435720335800783_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=kuTJgodI6u0AX9s1th4&_nc_ht=scontent.fjrs2-2.fna&oh=bb9df1f9f38a58afcb40c6910f94643b&oe=609B6C4D",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
        "https://scontent.fjrs2-2.fna.fbcdn.net/v/t1.6435-9/81025991_304924300483495_6781550208430899200_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=KTprSYivuMcAX8hm2oQ&_nc_ht=scontent.fjrs2-2.fna&oh=36f865f5825870776756c66e683b1e31&oe=609812F6",
        "https://www.dhresource.com/260x260/f2/albu/g10/M01/8C/89/rBVaVl0kW5SAV1-zAATKOlXeUMQ572.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
