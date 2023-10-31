import PropType from "prop-types";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function RegisterPage({ sidenavToggleHandler }) {
  RegisterPage.propTypes = {
    sidenavToggleHandler: PropType.func.isRequired,
  };

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    address: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(registerForm);
  }

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar sidenavToggleHandler={sidenavToggleHandler} title="Register Admin" />

        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap">
            <form role="form" onSubmit={submitHandler}>
              <div className="flex">
                <div>
                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Username</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="username-addon"
                      name="username"
                      value={registerForm.username}
                      onChange={inputHandler}
                      autoComplete="username"
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Email</label>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      name="email"
                      value={registerForm.email}
                      onChange={inputHandler}
                      autoComplete="current-email"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                    >
                      Sign in
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Password</label>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                      name="password"
                      value={registerForm.password}
                      onChange={inputHandler}
                      autoComplete="current-password"
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Phone Number</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      aria-describedby="phone-number-addon"
                      name="phoneNumber"
                      value={registerForm.phoneNumber}
                      onChange={inputHandler}
                      autoComplete="phone-number"
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Address</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Address"
                      aria-label="Address"
                      aria-describedby="address-addon"
                      name="address"
                      value={registerForm.address}
                      onChange={inputHandler}
                      autoComplete="address"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
