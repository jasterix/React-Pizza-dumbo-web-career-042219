import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzaList: [],
    newPizza: {}
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
    this.setState({newPizza: pizzaObj})
  }

  render() {
    // console.log(this.state);

    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.handleEditPizza}
            newPizza={this.state.newPizza}
          />

        <PizzaList pizzaList={this.state.pizzaList}
          onEditPizza={this.handleEditPizza}

          />
      </Fragment>
    );
  }
}

export default App;
