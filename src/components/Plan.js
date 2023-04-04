import React from "react";

const Plan = () => {
    return (
        <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
            {/* Left side */}
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img src="maldives-ile-beach-sun-38238.jpeg" alt="img1" className="row-span-3 object-cover w-full h-full p-2"/>
                <img src="photo-1515238152791-8216bfdf89a7.avif" alt="img2" className="row-span-2 object-cover w-full h-full p-2"/>
                <img src="photo-1454391304352-2bf4678b1a7a.avif" alt="img3" className="row-span-2 object-cover w-full h-full p-2"/>
                <img src="photo-1506929562872-bb421503ef21.avif" alt="img4" className="row-span-3 object-cover w-full h-full p-2"/>
                <img src="photo-1468413253725-0d5181091126.avif" alt="img5" className="row-span-2 object-cover w-full h-full p-2"/>
            </div>
            {/* Ri8 side */}
            <div className="flex flex-col h-full justify-center">
                <h3 className="text-5xl md:text-6xl font-bold">Plan your next trip</h3>
                <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, suscipit.</p>
                <p className="pb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id consectetur tenetur quos assumenda libero quaerat sint deleniti laudantium exercitationem repellat?</p>
                <div>
                    <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
                    <button className="bg-black text-white border-black hover:shadow-xl">Book your Trip</button>
                </div>
            </div>
        </div>

    )
}

export default Plan;