import React, { Component } from 'react';

import Nave from './navbar';
import Liste from './liste';


import './App.css';

const newstab=[{
  id:'1',
  title:'Inception 2010',
  article:'https://static.rogerebert.com/uploads/movie/movie_poster/inception-2010/large_ziKvu3Th9l1wN2aIeVj5ElpBqFu.jpg',
  parg: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  rating:6
  },
  
  {
  id:'2',
  title:'shawshank redemption',
  article:'https://is5-ssl.mzstatic.com/image/thumb/Video2/v4/14/3f/32/143f324a-24ed-fa7d-cbb0-25a65d12dba0/pr_source.lsr/268x0w.png',
  parg:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  rating:7
  
  },
  {
  id:'3',
  title:'blade runner 2017',
  article:'https://images-na.ssl-images-amazon.com/images/I/811SfzRngzL._SX342_.jpg',
  parg:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  rating:4
  
  },
  {
  id:'4',
  title:'overdrive',
  article:'https://images-na.ssl-images-amazon.com/images/I/91Mdq6xuBcL._RI_SX300_.jpg',
  parg:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  rating:3
  
  }]

class App extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        rating:1,
        news:newstab ,
        filtred:newstab 
       }
    }
    renderName(keyword1){
      return this.setState({ holderName:keyword1.toLocaleUpperCase() })

    }
    serach(keyword){
      let filter1=this.state.news.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
      this.setState({filtred:filter1})
    }
    searchrating1(val){
      let filter1=this.state.news.filter((el,i)=>{return el.rating === val})
      this.setState({filtred:filter1})
    }
    
  render() {
    return (
      <div className="App">
       
       
       <Nave
       searchname={(keyword)=>this.serach(keyword)}
       searchrating1={(val)=>this.searchrating1(val)}
       
       />
       <Liste news={this.state.filtred}/>
      </div>
    );
  }
  }

export default App;
