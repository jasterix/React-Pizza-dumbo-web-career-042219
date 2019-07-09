import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzaList: [],
    editedPizza: {},
    topping: "",
    size: "",
    vegetarian: ""
  }

//-----------------------fetch pizza list---------
  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(data => {
      this.setState({pizzaList: data})
    })
  }

//----------------Handle Edit Pizza
  handleEditPizza = (pizzaObj) => {
    this.setState({editedPizza: pizzaObj})
  }
  handlPizzaTopping = (topping) => {
    const updatedSelectedPizza = {...this.state.editedPizza}

    updatedSelectedPizza.topping = topping
    this.setState({editedPizza: updatedSelectedPizza})
  }
  render() {
    // console.log(this.state);

    return (
      <Fragment>
        <Header/>
        <PizzaForm
            onChangePizzaTopping={this.handlPizzaTopping}
            editPizza={this.handleEditPizza}
            editedPizza={this.state.editedPizza}
          />

        <PizzaList pizzaList={this.state.pizzaList}
          onEditPizza={this.handleEditPizza}

          />
      </Fragment>
    );
  }
}

export default App;
