import React, { useState, useContext } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import heart from "../assets/heart.png";
import shop from "../assets/shop.png";


const Details = () => {
    const { id } = useParams();
    const gadgetsData = useLoaderData();
    const gadget = gadgetsData.find(
        (gadget) => gadget.product_id.toString() === id
    );
    const [selectedRating, setSelectedRating] = useState(5);
    const [wishlistAdded, setWishlistAdded] = useState(false); 

   
    const handleAddToWishlist = (gadget) => {
        if (!wCart.some((item) => item.product_id === gadget.product_id)) {
            addToWhishList(gadget);
            notify("Added to wishlist");
            setWishlistAdded(true);
        } else {
            notify("Item already in wishlist");
        }
    };

    if (!gadget) {
        return <div>Gadget not found</div>;
    }

    return (
        <div className="p-5 text-white bg-[#9538E2] flex flex-col mb-[700px] pt-[50px] pb-[80px] relative items-center justify-center ">
            <h2 className="text-[32px] font-bold">Product Details</h2>
            <p className="max-w-[796px] text-center text-[16px]">
                Explore the latest gadgets that will take your experience to the next
                level. From smart devices to the coolest accessories, we have it all!
            </p>

            <div className="card card-side bg-base-100 shadow-xl absolute top-[200px] items-center justify-center p-4 flex">
                <figure className="flex-grow h-[450px] ">
                    <img
                        src={gadget.product_image}
                        alt={gadget.product_title}
                        className=" object-cover h-[567px] rounded-lg"
                    />
                </figure>
                <div className="card-body text-black">
                    <h2 className="card-title">{gadget.product_title}</h2>
                    <h3 className="p-0">Price: ${gadget.price}</h3>
                    <h4 className="text-[#09080f99]">{gadget.description}</h4>

                    <div
                        className={`badge ${gadget.availability ? "badge-primary" : "badge-secondary"
                            }`}>
                        {gadget.availability ? "In stock" : "Not available"}
                    </div>
                    <div>
                        <h1>Specification:</h1>
                        <ol
                            style={{ listStyleType: "decimal" }}
                            className="text-[#09080f99] pl-4">
                            {gadget.specification.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ol>

                        <h2>Rating  </h2>
                        <div className="flex items-center">
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <input
                                        key={rating}
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        onClick={() => setSelectedRating(rating)}
                                    />
                                ))}
                            </div>
                            <span className="ml-3 text-black border px-5  rounded-lg bg-[#09080f0d] m-1">
                                {selectedRating} star{selectedRating > 1 ? "s" : ""}
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <button
                                className={`${gadget.availability ? "" : "btn-disabled"
                                    } btn mr-2 my-2 bg-[#9538E2] w-[193px] text-white rounded-xl`}
                                onClick={() => {
                                    addToCart(gadget);
                                    notify("Added to cart");
                                }}>
                                Add to cart <img src={shop} className="w-[24px]" />
                            </button>
                            <button
                                className={`btn btn-outline h-[48px] rounded-full ${wishlistAdded ? "btn-disabled" : ""
                                    }`}
                                onClick={() => handleAddToWishlist(gadget)}
                                disabled={wishlistAdded}>
                                <img src={heart} className="w-[24px]"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
