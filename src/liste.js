import React from 'react';
import Item from './item';
import Hoc from './hoc';
import './liste.css';

const Liste=({news,remove})=>{
    return(<div className="use-news">
        {news.map((el,index)=>{return<Item  key={index} id={index} item={el} remove={remove}/>})}
    </div>)
}
export default Hoc(Liste);