import React, { useState } from 'react';
import { TiUser } from 'react-icons/ti';
import { TbPasswordUser } from 'react-icons/tb';
import { LoginCall} from '../apis/usersApi';
import { useNavigate} from 'react-router-dom';
import '../styles/welcomeForm.css';

function Welcome() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { accessToken } = await LoginCall(email, password); // Acceder al token
            localStorage.setItem('accessToken', accessToken); // Guardar token en localStorage
            navigate('/dashboard'); // Redirigir al dashboard
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
        }
    }

    return (
        <>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h2>Welcome again!</h2>
                    <div className='input-box'>
                        <input type="text" 
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TiUser className='icon'/>
                    </div>

                    <div className='input-box'>
                        <input type="password" 
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TbPasswordUser className='icon'/>
                    </div>

                    <button type='submit'>Send</button>

                    <div className='register-link'>
                        <p>Don't have an account? <a href='#'>Register</a></p>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Welcome;