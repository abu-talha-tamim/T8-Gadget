import React from 'react';
import banner from "../assets/banner.jpg"

const Hero = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-[#9538E2] rounded-2xl mb-[380px] text-white flex flex-col justify-center items-center text-center py-4 h-[450px] rounded-b-[32px] relative ">
                <h2 className="text-[35px] font-bold my-1 px-1 -mt-20">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h2>
                <p className="text-[14px] py-1">
                    Explore the latest gadgets that will take your experience to the next
                    level. From smart devices <br /> to the coolest accessories, we have it all!
                </p>
                <a>
                    <button className="btn rounded-3xl hover: text-white bg-purple-800  mt-4">Shop Now</button>
                </a>

                <div className="absolute w-2/3 left-1/2 transform h-[380px] -translate-x-1/2 top-[355px] bg-[#ffffff65] p-4 rounded-2xl shadow-lg ">
                    <img
                        src={banner}
                        alt="VR Headset"
                        className="rounded-2xl w-full h-[22rem]"
                    />
                </div>
            </div>

        </div>
    );
};

export default Hero;