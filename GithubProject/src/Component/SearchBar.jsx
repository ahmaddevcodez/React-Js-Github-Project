import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function SearchBar() {
  const [data, setData] = useState({
    searchValue: "",
  });

  const { setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: null });
  }

  function onSubmit(e) {
    e.preventDefault();

    const keys = Object.keys(data);
    let copyErrors = { ...errors };

    keys.forEach((key) => {
      if (data[key].trim().length === 0) {
        copyErrors = { ...copyErrors, [key]: "This Field cannot be empty" };
      }
    });

    const isError = Object.values(copyErrors).some((error) => error !== null);

    if (isError) {
      setErrors(copyErrors);
      return;
    }

    const githubInfoLoader = async (username) => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        return response.json();
      } catch (error) {
        console.error("Error fetching GitHub data:", error.message);
        alert("Error fetching GitHub data. Please try again.");
        throw error;
      }
    };

    setErrors({});
    githubInfoLoader(data.searchValue)
      .then((resultData) => {
        setUser(resultData); // Update the global state with fetched data
        console.log(resultData);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className={
          "bg-SeacrhBarDarkBgColor relative dark:bg-SeacrhBarLightBgColor rounded-lg flex justify-between align-middle p-2 " +
          (errors.searchValue ? "erroredField" : "")
        }
      >
        <div className="flex">
          <svg
            className="mt-3"
            height="24"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
              fill="#0079ff"
            />
          </svg>
          <input
            className="border-none font-light searchBarbg tracking-normal  dark:bg-SeacrhBarLightBgColor outline-SeacrhBarDarkBgColor dark:text-SeachBarDarkInputColor text-UniversalParaColor bg-SeacrhBarDarkBgColor ml-8 "
            type="text"
            placeholder="Github UserName "
            name="searchValue"
            onChange={handleChange}
            autoComplete="off"
          />
          <div className="mt-3"></div>
        </div>
        <div>
          <button
            type="submit"
            className="searchBar-btn bg-UniversalBtnBgColor text-UniversalParaColor p-3 pl-6 rounded-xl pr-6"
          >
            Search
          </button>
        </div>
      </form>
      <div>
        {errors["searchValue"] && (
          <label htmlFor="searchValue ">
            <div className="flex justify-end ">
              <small className="text-red-700 bg-NavLightHeadingColor rounded-md ">
                {errors["searchValue"]}
              </small>
            </div>
          </label>
        )}
      </div>
    </>
  );
}

export default SearchBar;
