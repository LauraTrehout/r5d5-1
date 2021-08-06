import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import love from "../assets/stormtrooper-love.jpg";

const Inscription = () => {

  const history = useHistory();
  const [message, setMessage] = useState("");
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;

  const navigateToHome = () => {
    history.push("/Home");
  };

  const pass = useRef();

  const change = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    setformdata({
      name: "",
      email: "",
      password: "",
    });

    navigateToHome();
  };

  return (
    <div class='bg-gray flex content-center justify-center h-full items-center'>
      <div class='bg-white shadow-lg max-w-lg'>
        <img class='w-full h-45 object-cover' src={love} alt='love connexion' />
        <div class='p-4'>
          <form onSubmit={submit}>
            <h1 class='text-2xl font-bold text-graypurple mb-2 mt-2 text-center'>
              Inscription
            </h1>
            <label class='text-darkside block mb-2 mt-5'>Email:</label>
            <input
              class='border border-gray shadow-inner py-2 px-3 text-gray-700 w-full focus:shadow-lg'
              type='email'
              value={email}
              placeholder='Enter Email'
              name='email'
              onChange={change}
            ></input>

            <label class='text-darkside block mb-2 mt-5'>Password:</label>
            <div>
              <input
                class='border border-gray shadow-inner py-2 px-3 text-gray-700 w-full focus:shadow-lg'
                ref={pass}
                type='password'
                placeholder='Enter Password'
                value={password}
                name='password'
                onChange={change}
              ></input>
            </div>
            <div>
              <button
                class='bg-purple	 text-lightgray px-4 py-2 rouded hover:bg-purple-dark	 mt-5'
                type='submit'
                name='submit'
              >
                Join the force
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Inscription;