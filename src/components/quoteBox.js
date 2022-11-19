import React from "react";
import "./quoteBox.css"
import {data} from "./data"
import { useState } from "react";
import { useEffect } from "react";



const QuoteBox = () => {
    

    let [quote, setQuote] = useState(data[0])

    const random = ()=> {
        let index = Math.floor(Math.random()*data.length);
        setQuote(()=> {
            return data[index];
        })
    }

    const getRandomColor= ()=> {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    return (
        <div id="quote-box">
            <div id="text">
            <i className='bx bxs-quote-left' id= "quote-logo"></i>
            <span>{quote.quote}</span>

            </div>

            <div id="author">
            <p>-{quote.source}</p>
            </div>
            
            <div id= "buttons">
            <div >
            <button id="tweet-quote"><a target="_blank" href="twitter.com/intent/tweet">
                <i className='bx bxl-twitter'></i>
                </a></button>

            <button id="tweet-quote"><a target="_blank" href="twitter.com/intent/tweet">
                <i className='bx bxl-tumblr'></i>
                </a></button>
            </div>

            <button id="new-quote" onClick={() => {
          random();
          getRandomColor();
        }}>New Quote</button>
            </div>
        
        </div>
        
    )
}


export default QuoteBox;