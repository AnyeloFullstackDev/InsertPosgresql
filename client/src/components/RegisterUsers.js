import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PERSON } from '../apollo-client/mutation'; // Asegúrate de que la ruta sea correcta
import { client } from '../apollo-client/client'; // Asegúrate de que la ruta sea correcta

  export const RegisterUsers = () => {  // Corregido el error de sintaxis
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ci, setCi] = useState('');
  const [city, setCity] = useState('');

  const [createPerson] = useMutation(CREATE_PERSON, { client }); // Verifica que `client` esté correctamente definido

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPerson({ variables: { name, lastName, ci, city } });
      setName('');
      setLastName('');
      setCi('');
      setCity('');
      alert('Person created successfully');
    } catch (err) {
      console.error('Error creating person:', err);
      alert('Failed to create person'); // Puedes mostrar un mensaje amigable al usuario
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Person</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">C.I.</label>
          <input 
            type="text" 
            className="form-control" 
            value={ci} 
            onChange={(e) => setCi(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input 
            type="text" 
            className="form-control" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Create Person
        </button>
      </form>
    </div>
  );
};

