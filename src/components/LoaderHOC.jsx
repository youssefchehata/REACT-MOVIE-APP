import React, {Component} from 'react';
import './LoaderHOC.css'
function LoaderHOC(Spinner) {
  return class LoaderHOC extends Component{
  
    render(){
    
        return this.props.movielist.length===0 ? <div><p className="pidesgin" > Movie not Found ... </p><div className="loader"></div></div> : <Spinner {...this.props}/>;
    
      }
  }

}
export default LoaderHOC;