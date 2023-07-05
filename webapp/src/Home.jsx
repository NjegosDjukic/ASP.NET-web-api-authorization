import { useState, useContext } from 'react'
import { useNavigate, Routes, Route } from 'react-router';
import './App.css'
import { UserContext } from './context/UserProvider';
import { getFact } from './services/service';

const Home = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    login(email, password).then(() => navigate('/employees'));
  }
  return (
    <div className='wrapper'>
    <label>Email</label>
    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
    <label>Password</label>
    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
  </div>
  )
}
export default Home