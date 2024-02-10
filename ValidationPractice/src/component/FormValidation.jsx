import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
  });
  const [errors, setErrors] = useState({});

  function handleName(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const keys = Object.keys(data);
    let copyErrors = { ...errors };

    keys.forEach((key) => {
      const keys = data[key];

      if (
        keys === undefined ||
        keys === null ||
        keys.trim().length === 0 ||
        keys.length > 9
      ) {
        copyErrors = {
          ...copyErrors,
          [key]: "Field Cannot Be Empty or Exceed 9 characters",
        };
      } else {
        copyErrors = { ...copyErrors, [key]: null };
      }
    });

    const isError = Object.keys(copyErrors).length !== 0;

    if (isError) {
      setErrors(copyErrors);
      return;
    }

    setErrors({});
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
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
              onChange={handleName}
              className={
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" +
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
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          {/*   
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
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
              id="confirmPassword"
              name="confirmPassword"
              // onChange={handleChange}
              // value={data.confirmPassword}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password"
            />
          </div> */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
