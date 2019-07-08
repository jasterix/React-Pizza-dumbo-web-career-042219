import React from "react"

class PizzaForm extends React.Component {

  state = {
    topping: "",
    size: "",
    vegetarian: ""
  }

  EditPizza = (pizzaObj) => {
    console.log("hello");
  }

  handleChange = (event, data) => {
    console.log(event.target.value);
  }

  render(){
    console.log(this.props);
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={

                //Pizza Topping Should Go Here
                this.props.newPizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={this.handleChange} value={ this.props.newPizza ? this.props.newPizza.size : null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input  onChange={this.handleChange} className="form-check-input" type="checkbox" value="Vegetarian" checked={this.props.newPizza.vegetarian ? true : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>

          <div className="form-check">
            <input onChange={this.handleChange} className="form-check-input" type="checkbox" value="Not Vegetarian" checked={this.props.newPizza.vegetarian===false ? true : null }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )}
}

export default PizzaForm
