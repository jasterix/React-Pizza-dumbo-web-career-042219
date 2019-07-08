import React from "react"

class Pizza extends React.Component {


  handleClick = (event) => {
    this.props.editPizza(this.props)
  }

  render(){
    // console.log(this.props.vegetarian);
  return(
    <tr>
      <td>{this.props.topping}</td>
      <td>{this.props.size}</td>
      <td>{this.props.vegetarian ? "yes" : "no"}</td>
      <td><button onClick={this.handleClick} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}
}
export default Pizza
