import React from "react"

class PizzaForm extends React.Component {

  handleChangePizzaTopping = (e) => {
    this.props.onChangePizzaTopping(e.target.value)
    this.setState({topping: pizzaObj.topping})
  }

  handleChangePizzaSize = (e) => {
    console.log('handleChangePizzaSize: ',e.target.value);
    // this.setState({size: pizzaObj.size})
  }

  handleChangePizzaVegetarian = (pizzaObj) => {
    this.setState({vegetarian: pizzaObj.vegetarian})
  }

  handleChange = (event, data) => {
    console.log(event.target.value);
  }

  handleSubmit = (event) => {

    console.log("submittingggg");
  }

  render() {
    console.log(this.state);
    return (<div className="form-row">
      <div className="col-5">
        <input onChange={this.handleChangePizzaTopping} type="text" className="form-control" placeholder="Pizza Topping" value={//Pizza Topping Should Go Here
          this.props.newPizza.topping
}/>
      </div>
      <div className="col">
        <select onChange={this.handleChangePizzaSize} value={this.props.newPizza
            ? this.props.newPizza.size
            : null} className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input onChange={this.handleChangePizzaVegetarian} className="form-check-input" type="checkbox" value="Vegetarian" checked={this.props.newPizza.vegetarian
              ? true
              : null}/>
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>

        <div className="form-check">
          <input onChange={this.handleChangePizzaVegetarian} className="form-check-input" type="checkbox" value="Not Vegetarian" checked={this.props.newPizza.vegetarian === false
              ? true
              : null}/>
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
      </div>
    </div>)
  }
}

export default PizzaForm
