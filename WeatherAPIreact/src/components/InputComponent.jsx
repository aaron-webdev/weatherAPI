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
                        value=""
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