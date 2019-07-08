import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  handleClick = (event) => {
    this.props.editPizza(this.props)
  }

  render() {

    // Pass pizza props to Pizza component
    let pizzas = this.props.pizzaList.map(pizza => (
        <Pizza
          key={pizza.id}
          {...pizza}
          editPizza = {this.props.onEditPizza}
           />

    ))

    // console.log(this.props);

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzas
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
