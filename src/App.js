import React,{Component} from 'react';
import getWeather from './utils/api'
import Home from './components/Home'

class App extends Component {

  state = {
    weather: []
  }

  async componentDidMount(){
    const {data} = await getWeather()
    this.setState({weather:data})
    console.log(this.state.weather)
  }

  render(){
    return (
      <Home weather={this.state.weather}/>
    );
  }
}

export default App;
