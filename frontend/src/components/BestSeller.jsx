import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { useEffect } from "react";
import Title from "./Title.jsx";


const BestSeller = () => {
    
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestSeller === true));
    setBestSeller(bestProduct.salice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"}></Title>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          recusandae, eos numquam quasi esse enim odio repellendus ratione quis
          aut at ipsa harum repudiandae voluptatibus, corporis veritatis.
          Dolore, quasi quis!
        </p>
      </div>


    </div>
  );
};

export default BestSeller;
