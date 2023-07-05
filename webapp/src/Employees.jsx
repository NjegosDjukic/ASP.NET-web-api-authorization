import { useState } from 'react';
import { addEmployee } from './services/service';

const Employees = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        addEmployee(payload).then(res => console.log(res))
    }
  return (
    <div className='form-wrap'>
        <label>Ime</label>
        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label>Prezime</label>
        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label>Email</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Employees