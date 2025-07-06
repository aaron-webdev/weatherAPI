import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {Row, Col} from 'react-bootstrap';
import WeatherDisplay from './components/WeatherDisplay';
import InputComponent from './components/InputComponent';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='d-flex flex-column text-center'>
      <h1>Weather Warden</h1>
      <h3>On demand weather reports by city</h3>
      <div className='m-auto my-5'>
        <Row>
          <Col>
            <WeatherDisplay/>
          </Col>
          <Col>
            <InputComponent/>
          </Col>
        </Row>
      </div>
    </section>
    </>
  )
}
