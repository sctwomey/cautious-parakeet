import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        userName: formState.userName
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <Link to="/login">← Go to Login</Link>

      <h2 className='signup-login-h2'>Signup</h2>
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleFormSubmit} className='signup-login-form'>
          <div className="form-group">
            <label htmlFor="userName">UserName:</label>
            <input
              placeholder="Your Username"
              name="userName"
              type="userName"
              id="userName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row justify-content-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div >
  );
}

export default Signup;
