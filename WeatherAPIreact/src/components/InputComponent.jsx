import {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap'


export default function InputComponent()
{
    const [city, setCity] = useState('newYorkCity');


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