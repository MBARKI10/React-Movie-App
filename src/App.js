import React, { Component } from 'react';

import Nave from './navbar';
import Liste from './liste';



import './App.css';

const newstab=[{
  id:'1',
  title:'Inception',
  

  article:'https://static.rogerebert.com/uploads/movie/movie_poster/inception-2010/large_ziKvu3Th9l1wN2aIeVj5ElpBqFu.jpg',
  rating:6
  },
  
  {
  id:'2',
  title:'Shawshank redemption',
 
  article:'https://is5-ssl.mzstatic.com/image/thumb/Video2/v4/14/3f/32/143f324a-24ed-fa7d-cbb0-25a65d12dba0/pr_source.lsr/268x0w.png',
  rating:7
  
  },
  {
  id:'3',
  title:'Blade runner',
  
  article:'http://fr.web.img5.acsta.net/c_215_290/pictures/17/08/24/15/18/597734.jpg',
  rating:4
  
  },
  {
  id:'4',
  title:'Overdrive',
  
  article:'https://images-na.ssl-images-amazon.com/images/I/91Mdq6xuBcL._RI_SX300_.jpg',
  rating:3
  
  }]

class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = { 
        rating:1,
        news:newstab ,
        // filtred:newstab ,
        isLoading: true
       }
    }
    renderName(keyword1){
      return this.setState({ holderName:keyword1.toLocaleUpperCase() })

    }
    serach(keyword){
      let filter1=this.state.news.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
      this.setState({news:filter1})
    }
    searchrating1(val){
      let filter1=this.state.news.filter((el,i)=>{return el.rating === val})
      this.setState({filtred:filter1})
    }
    componentDidMount() {
     return  setTimeout(() => {
        this.setState({isLoading: false})
      }, 3000)
    }
  
addMovie=(newmovie)=>{
this.setState({news:this.state.news.concat(newmovie)})
}
  render() {
    return (
      <div className="App">
       
       
       <Nave
       add={(newmovie)=>this.addMovie(newmovie)}

       searchname={(keyword)=>this.serach(keyword)}
       searchrating1={(val)=>this.searchrating1(val)}
       
       />
       <Liste news={this.state.news}
       isLoading={this.state.isLoading}
       
       
       />
       
      </div>
    );
  }
  }

export default App;
