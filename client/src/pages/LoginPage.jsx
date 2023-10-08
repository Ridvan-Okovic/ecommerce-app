import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (identifier, value) => {
    if (identifier === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    // TODO API call
    setEmail('');
    setPassword('');
  };

  console.log(email, password);

  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center font-montserrat">
      <form
        onSubmit={loginHandler}
        className="w-96 shadow-[0_1.5px_5px_0_rgba(0,0,0,0.15)] rounded flex flex-col px-8 py-8 gap-4"
      >
        <h1 className="text-center font-medium text-3xl">Log in</h1>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="" className="font-medium">
            Email
          </label>
          <input
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={email}
            placeholder="example@gmail.com"
            type="email"
            className="w-full h-8 text-sm outline-none px-3 focus:shadow-md shadow bg-slate-50 border border-slate-300 text-[#64748b] rounded"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="" className="font-medium">
            Password
          </label>
          <input
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={password}
            placeholder="••••••"
            type="password"
            className="w-full h-8 text-lg outline-none focus:shadow-md px-3 shadow bg-slate-50 border border-slate-300 text-[#64748b] rounded"
          />
        </div>
        <button className="w-full h-8 rounded font-medium text-white bg-green-500">
          Submit
        </button>
        <p className="text-center">
          {`Don't have an account,`}{' '}
          <Link
            to="/home/register"
            className="text-green-500 underline font-medium"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
