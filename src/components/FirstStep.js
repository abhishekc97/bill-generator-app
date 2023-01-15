import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FirstStep(props) {
    const user = props;
    const navigate  = useNavigate ();
    
    const { register, handleSubmit, formState: { errors } } = useForm({ 
        defaultValues: {
            name:user.name,
            email:user.email,
            phone:user.phone
        }
       });

    function onSubmit(data) {
        console.log(data);
        props.updateUser(data);
        navigate("/second");
    }
    
    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    {...register("name", { required: 'Name is required.',
                    pattern: {
                      value: /^[A-Za-z\s]*$/,
                      message: 'Name should contain only characters.'
                    } })}
                    className={`${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && (
                        <p className="errorMsg">{errors.name.message}</p>
                    )}

                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="off"
                    {...register("email", { required: 'Email is required.',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'Email is not valid.'
                    } })}
                    className={`${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && (
                        <p className="errorMsg">{errors.email.message}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone"
                    placeholder="Enter your phone mumber"
                    autoComplete="off"
                    {...register("phone", { required: 'Phone is required.',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'phone is not valid.'
                    } })}
                    className={`${errors.phone ? 'input-error' : ''}`}
                    />
                    {errors.phone && (
                        <p className="errorMsg">{errors.phone.message}</p>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Next Step
                </Button>
            </div>
        </Form>
    );
}

export default FirstStep;
