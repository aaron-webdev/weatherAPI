import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function InputComponent()
{



    return(
        <>
            <h6>Input Component</h6>
            <section className='d-flex'>
                <div className='m-auto'>
                    <Form>
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="New York City"
                            value="newYorkCity"
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Boston"
                            value="boston"
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Detroit"
                            value="detroit"
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Los Angeles"
                            value="losAngeles"
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Houston"
                            value="houston"
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Nashville"
                            value="nashville"
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Knoxville"
                            value="knoxville"
                        />
                        <Form.Check
                            name="selectLocation"
                            type="radio"
                            label="Portland"
                            value="portland"
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