import {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap'


export default function InputComponent()
{
    const [city, setCity] = useState('newYorkCity');
    const [customLat, setCustomLat] = useState(0);
    const [customLong, setCustomLong] = useState(0);


    useEffect(() => {

    }, [city])



    return(
        <>
            <section className='d-flex'>
                <div className='m-auto'>
                    <h4>Input Component</h4>
                    <Form>
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="New York City"
                            value="newYorkCity"
                            checked={city==="newYorkCity"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Boston"
                            value="boston"
                            checked={city==="boston"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Detroit"
                            value="detroit"
                            checked={city==="detroit"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Los Angeles"
                            value="losAngeles"
                            checked={city==="losAngeles"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Houston"
                            value="houston"
                            checked={city==="houston"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Nashville"
                            value="nashville"
                            checked={city==="nashville"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Knoxville"
                            value="knoxville"
                            checked={city==="knoxville"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Portland"
                            value="portland"
                            checked={city==="portland"}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Form>
                    <section id='customCityDiv'>
                        <h5>Custom Location:</h5>
                        <div className='d-flex'>
                            <div>
                                <label for='latitude'>Latitude:</label>
                                <input
                                    placeholder='Latitude:'
                                    id='latitude'
                                    value={customLat}
                                    onChange={(e) => setCustomLat(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for='logitude'>Longitude:</label>
                                <input
                                    placeholder='Longitude:'
                                    id='logitude'
                                    value={customLong}
                                    onChange={(e) => setCustomLong(e.target.value)}
                                />   
                            </div>    
                        </div>
                        
                    </section>
                </div>
            </section>
        </>
    );
}

/*
<Form.Check
name="selectLocation"
type="radio"
label=""
value=""
/>
*/