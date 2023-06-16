import React from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

export default function Loginform() {
  const { register, handleSubmit } = useForm();
const onSubmit = (data) => {
   console.log(data);
}
  return (
    <div>
      <Container className="mt-5 pt-5">
        <h1 className="text-center">Login From</h1>
 <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")}/>

      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>


    </div>
  )
}
