
import React from "react";
import './counter.css'
import  {connect} from "react-redux"
import {minss,pluss} from "./../../store/action"
class  Counter extends React.Component{
    render(){
return(
  <div >

    <div className="_main_div">

        <h1>
            counter
        </h1>
<button onClick={()=>this.props.minss()}>-</button>
<h1>{this.props.num}</h1>
<button onClick={()=>this.props.pluss()}>+</button>
    </div>
  </div>
)
}
}
// GET INITIAL STATE IN THE PAGE
const mapStateToProps = (data) => {
    console.log("========GLOABAL STATE======>", data);
    return {
      num: data.num,
    };
  };
  
  // CONNECT THE FUNCTIONS WITH PAGE
  const mapDispatchToProps = (dispatch) => {
    return {
        minss: () => dispatch(minss()),
        pluss: () => dispatch(pluss()),
    
  };
}
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);
  
