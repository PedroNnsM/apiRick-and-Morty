import React from "react";

const Characters = ({characters = []}) => {

    return(
        <div className="row">
        {
            characters.map((item, index) => (
                <div key={index} className="col w-80 h-auto grid">
                    <div className=" border-sky-800 border-8"> 
                        <img src={item.image} alt='' className="border-r-slate-300 border-8 row-" />
                        <h2>{item.name}</h2>
                    </div>
                </div>
            ))
        } 
        </div>
    )
}

export default Characters