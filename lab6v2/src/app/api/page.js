"use client"
//API Page Declaration
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(DATA_URL);
        console.log(response);
        const data = await response.json();
        setData(data);
    }

    //nasa time
    const NASA_API = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3";

    async function fetchNASA() {
        const response = await fetch(NASA_API);
        console.log(response);
        const data = await response.json();
        setData(data);
    }

    const DisplayMedia = () => {
        if (data){
          let mediaList = [];
          data.forEach((medium, index) => {
            let formattedMedia = medium.media_type === 'image' ? <img src={medium.url} /> : (
            <video controls width="250">
              <source src={medium.url} type="vide/webm"/>
            </video>
            )

            mediaList.push(
              <li key={index}>
                {formattedMedia}
                <h2>{medium.title} </h2>
                {medium.explanation}
              </li>
            );
          });

            return(
                <div>
                    <ul>
                        {mediaList}
                    </ul>
                </div>
            )
        }else{
            return(
                <div>nah</div>
            )
        }
    }
 

    const DisplayProducts = () => {
        if (data) {

            const productsList = [];
            data.forEach((product, index) => {
                productsList.push(
                    <li key={index}>{product.name}</li>
                )
            });


            return (
                <div className="border-4 border-black p-4 mb-4">
                    <ul >
                        {productsList}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="border-4 border-black p-4 mb-4">
                    <ul >
                        Nothing
                    </ul>
                </div>
            )
        }
    }

    return (
        <div className="p-4">
            <header className="border-4 border-white p-4 mb-4">
                <h1>Welcome to my NASA Page</h1>
                <button
                    className="border-neutral-200 bh-black px-6"
                onClick={() => fetchData()}
                >check product</button>
                <button                     
                    className="border-neutral-200 bh-black px-6"
                    onClick={() => fetchNASA()}
                >check out the image of the day</button>

            </header>
            Welcome to my API Page
            <DisplayProducts />
            <DisplayMedia />
        </div>
    );
}