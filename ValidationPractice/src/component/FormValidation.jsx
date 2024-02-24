import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const keys = Object.keys(data);
    let copyErrors = { ...errors };

    keys.forEach((key) => {
      const keyValue = data[key];
      let fieldError = null;

      if (
        keyValue === undefined ||
        keyValue === null ||
        keyValue.trim().length === 0
      ) {
        fieldError = "Field Cannot Be Empty";
      } else if (key === "email" && !validateEmail(keyValue)) {
        fieldError = "Invalid email";
      }

      if (
        key === "password" &&
        keyValue.trim() !== data.confirmPassword.trim()
      ) {
        fieldError = "Passwords do not match";
      }

      copyErrors[key] = fieldError;
    });

    const isError = Object.values(copyErrors).some((error) => error !== null);
    console.log(isError, errors);

    if (isError) {
      setErrors(copyErrors);
      return;
    }

    setErrors({});
  }

  const validateEmail = (email) => {
    return String(email)
      .trim()
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-20 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Name
            </label>

            <input
              type="text"
              name="name"
              onChange={handleChange}
              className={
                "w-full px-4 py-2 pr-28 border rounded-md focus:outline-none focus:border-blue-500" +
                (errors.name ? " erroredField" : "")
              }
              placeholder="Enter your name"
            />
            <br />
            {errors["name"] && (
              <label htmlFor="name">
                <small>{errors["name"]}</small>
              </label>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className={
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" +
                (errors.email ? " erroredField" : "")
              }
              placeholder="Enter your email"
            />
            <br />
            {errors["email"] && (
              <label htmlFor="email">
                <small>{errors["email"]}</small>
              </label>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className={
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" +
                (errors.password ? " erroredField" : "")
              }
              placeholder="Enter your password"
            />
            <br />
            {errors["password"] && (
              <label htmlFor="password">
                <small>{errors["password"]}</small>
              </label>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              // value={data.confirmPassword}
              className={
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" +
                (errors.confirmPassword ? " erroredField" : "")
              }
              placeholder="Confirm your password"
            />
            <br />
            {errors["confirmPassword"] && (
              <label htmlFor="confirmPassword">
                <small>{errors["confirmPassword"]}</small>
              </label>
            )}
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
