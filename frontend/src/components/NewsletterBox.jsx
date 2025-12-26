import React from "react";

const NewsletterBox = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe to our newsletter for the latest updates and get 20% off.
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime typesetting industry.
        </p>
        
        <form className="w-full sm:w-1/2 mx-auto flex item-center border gap-3 my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder='Enter your Email' required  />
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
        </form>
    </div>
  );
};

export default NewsletterBox;
