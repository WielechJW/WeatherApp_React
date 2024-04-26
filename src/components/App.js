import { Component } from 'react';
import Form from './Form';
import Result from './Result';


// Klucz do Api
const APIKey = 'fec03537e19b369ce02724342a8152f8'


class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false
  }

  handleInputChange = (e) => {
    this.setState({value : e.target.value})
  }


  handleCitySubmit = (e) => {
    e.preventDefault()
    const API =
    `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error("Nie udało sie")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleDateString()
      this.setState(state =>({
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: state.value
      }))
    })
    .catch(err => {
      console.log(err);
      this.setState(state =>({
        err: true,
        city: state.value
      }))
    })
  }

  render() {
    return(
      <div className="App">
        <div className='w-full h-full'>
          <div className='mx-32  h-screen align-item-center place-content-center  '>
            <h1 className='p-10 text-center text-3xl font-medium '>Aplikacja pogodowa</h1>
            <Form 
            value={this.state.value} 
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
            />
            <Result weather={this.state}/>
          </div>
          
        </div>
      
    </div>
    )
  }
}


export default App;
