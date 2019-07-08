import React from "react"

class Pizza extends React.Component {

  render(){
    console.log(this.props.vegetarian);
  return(
    <tr>
      <td>{this.props.topping}</td>
      <td>{this.props.size}</td>
      <td>{this.props.vegetarian}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}
}
export default Pizza
