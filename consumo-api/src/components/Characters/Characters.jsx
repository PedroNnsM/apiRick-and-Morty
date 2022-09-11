import React from "react";
import './Characters.css'
const Characters = ({characters = []}) => {

    return(
        <div 
        className="w-full py-5 grid grid-cols-3 gap-x-2 gap-y-2 grid-flow-row-dense p-96">
        {
            characters.map((item, index) => (
                <div key={index} 
                className=" border-sky-800 border-2 rounded-lg shadow-xl min-w-[250px] ">
                    <div 
                    className="flex flex-col justify-center items-center p-4 "> 
                        <img src={item.image} alt='' 
                        className={`center mb-5 rounded-full border-4  w-[50%]  mt-5 ${item.species}` }

                        />
                        <h2 
                        className="font-mono text-2xl mb-4 ">
                        {item.name}
                        </h2>
                        <p 
                        className="font-mono text-2xl">
                        {item.species}
                        </p>
                    </div>
                </div>
            ))
        } 
        </div>
    )
}

export default Characters