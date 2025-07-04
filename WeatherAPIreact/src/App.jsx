import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='d-flex flex-column text-center'>
      <div className='m-auto my-5'>
        <h1>Weather Warden</h1>
        <h3>On demand weather reports by city</h3>        
      </div>

    </section>
    </>
  )
}

export default App
