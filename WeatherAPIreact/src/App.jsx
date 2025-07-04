import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import WeatherDisplay from './components/WeatherDisplay';
import InputComponent from './components/InputComponent';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InputComponent/>
    <section className='d-flex flex-column text-center'>
      <div className='m-auto my-5'>
        <h1>Weather Warden</h1>
        <h3>On demand weather reports by city</h3>        
      </div>
    <br/>
      <WeatherDisplay/>
    </section>
    </>
  )
}
