import { useState, useRef } from "react";
import love from "../assets/stormtrooper-love.jpg";

const Connexion = () => {
  const []
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;

  const pass = useRef();
  if (!localStorage.getItem("users")) {
    let users = [
      {
        email: "leia@force.com",
        password: "light",
      },
      {
        email: "luke@force.com",
        password: "dark",
      },
    ];

    localStorage.setItem("users", JSON.stringify(users));
  }

  const change = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let search = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!search) {
      console.log("user not found");
      return;
    }

    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    setformdata({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div class='bg-gray-100 flex content-center justify-center h-full items-center'>
      <div class='bg-white shadow-lg max-w-lg'>
        <img class='w-full h-45 object-cover' src={love} alt='love connexion' />
        <div class='p-4'>
          <form onSubmit={submit}>
            <h1 class='text-2xl font-bold text-gray-800 mb-2 mt-2 text-center'>
              Connexion
            </h1>
            <label class='text-gray-800 block mb-2 mt-5'>Email:</label>
            <input
              class='border border-gray-300 shadow-inner py-2 px-3 text-gray-700 w-full focus:shadow-lg'
              type='email'
              value={email}
              placeholder='Enter Email'
              name='email'
              onChange={change}
            ></input>

            <label class='text-gray-800 block mb-2 mt-5'>Password:</label>
            <div>
              <input
                class='border border-gray-300 shadow-inner py-2 px-3 text-gray-700 w-full focus:shadow-lg'
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
                class='bg-indigo-700	 text-white px-4 py-2 rouded hover:bg-indigo-900	 mt-5'
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

export default Connexion;
