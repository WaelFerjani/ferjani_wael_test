import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addEvent } from './service/api';


function AddCompetion() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        nbTickets: '',
        nbParticipants: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call your web service to add the event using formData
        try {
            await addEvent(formData);
            // After successful addition, redirect to the events page
            navigate('/events');
        } catch (error) {
            console.error('Error adding event:', error);
        }
        // After successful addition, redirect to the events page
        navigate('/competitions');
    };

    return (
        <div>
            <h2>Add competition</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Fees</Form.Label>
                    <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formNbTickets">
                    <Form.Label>date</Form.Label>
                    <Form.Control type="number" name="nbTickets" value={formData.nbTickets} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formNbParticipants">
                    <Form.Label>details</Form.Label>
                    <Form.Control type="number" name="nbParticipants" value={formData.nbParticipants} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add competition
                </Button>
            </Form>
        </div>
    );
}

export default AddCompetion
