import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzaList: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(data => {
      this.setState({pizzaList: data})
    })
  }

  render() {
    // console.log(this.state);

    return (
      <Fragment>
        <Header/>
        <PizzaForm/>

        <PizzaList pizzaList={this.state.pizzaList}
          />
      </Fragment>
    );
  }
}

export default App;
