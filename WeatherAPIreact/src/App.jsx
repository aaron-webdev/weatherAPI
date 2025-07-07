import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from './components/WeatherApp';

export default function App() {

  return (
    <>
    <section className='d-flex flex-column text-center'>
      <h1>Weather Warden</h1>
      <h3>On demand weather reports by city</h3>
      <div className='m-auto my-5'>
            <WeatherApp/>
      </div>
    </section>
    </>
  )
}
