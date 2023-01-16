import React, { useState } from "react";
import memesData from "../memesData.js";

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

export default function Meme() {
    const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function handleClick() {
        if (allMemeImages.success) {
            const memesArray = allMemeImages.data.memes;
            const memeIndex = Math.floor(Math.random() * memesArray.length);
            setMeme((previous) => ({
                ...previous,
                randomImage: memesArray[memeIndex].url,
            }));
        }
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className="form--button" onClick={handleClick}>
                    Get a new meme image 🖼
                </button>
                <img className="meme--image" src={meme.randomImage} />
            </div>
        </main>
    );
}
