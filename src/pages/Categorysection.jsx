import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import gadgetsData from "../../public/gadgets.json";


const Categorysection = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [gadgets, setGadgets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // document.title = "Home | Gadget Hub ";
        setGadgets(gadgetsData);
    }, []);

    const handleCategoryClick = (event, category) => {
        event.preventDefault();
        setSelectedCategory(category);
        if (category === "All") {
            setGadgets(gadgetsData);
        } else {
            const filteredGadgets = gadgetsData.filter(
                (gadget) => gadget.category === category
            );
            setGadgets(
                filteredGadgets.length > 0
                    ? filteredGadgets
                    : [{ product_id: 0, product_title: "No data found" }]
            );
        }
    };

    const handleDetailsClick = (event, productId) => {
        event.preventDefault();
        navigate(`/details/${productId}`); 
    };
    return (
        <div className="container mx-auto">
          
    
          <div className="flex">
            <div className="w-1/4 p-5">
              <h2 className="text-center text-[24px] font-bold text-[#0B0B0B] mb-4">
                Categories
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  "All",
                  "Computers",
                  "Phones",
                  "Smart Watches",
                  "Chargers",
                  "Power Banks",
                ].map((category) => (
                  <li key={category} className="text-[18px]">
                    <button
                      className={` rounded-3xl hover: text-white my-3 btn hover:bg-purple-600 w-[192px] ${
                        selectedCategory === category ? "btn-active" : ""
                      }`}
                      style={{ color: "rgba(9, 8, 15, 0.6)" }}
                      onClick={(event) => handleCategoryClick(event, category)}>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
    
            <div className="w-3/4 p-5">
              <h2 className="text-center text-[40px] font-bold text-[#0B0B0B] mb-4">
                Explore Cutting-Edge Gadgets
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {gadgets.map((gadget) => (
                  <div key={gadget.product_id} className="card card-bordered p-4">
                    {gadget.product_id !== 0 ? (
                      <>
                        <img
                          src={gadget.product_image}
                          alt={gadget.product_title}
                          className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-[20px] font-bold mb-2">
                          {gadget.product_title}
                        </h3>
                        <p className="text-[16px] mb-2">${gadget.price}</p>
                        <button
                          className="px-5 py-2 border-2 border-purple-500 rounded-3xl text-purple-500 font-semibold hover:bg-purple-600 hover:text-white mr-12"
                          onClick={(event) =>
                            handleDetailsClick(event, gadget.product_id)
                          }>
                          Details
                        </button>
                      </>
                    ) : (
                      <h3 className="text-[20px] font-bold mb-2">
                        {gadget.product_title}
                      </h3>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };
                export default Categorysection;