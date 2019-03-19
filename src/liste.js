import React from 'react';
import Item from './item';
import './liste.css';
const Liste=({news})=>{
    return(<div className="use-news">
        {news.map((el,index)=>{return<Item  key={index}  item={el} />})}
    </div>)
}
export default Liste