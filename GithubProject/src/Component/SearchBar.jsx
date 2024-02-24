import React, { useContext } from "react";
import SearchContext from "../context/userContext";

function SearchBar() {
  const { searchValue, updateSearchValue, updateUserData } =
    useContext(SearchContext);

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    updateSearchValue(event.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const keys = Object.keys(searchValue);
    let copyErrors = { ...errors };

    keys.forEach((key) => {
      if (
        searchValue[key] !== undefined ||
        searchValue[key] !== null ||
        searchValue[key].trim().length === 0
      ) {
        if (searchValue[key].trim().length === 0) {
          copyErrors = { ...copyErrors, [key]: "This Field cannot be empty" };
        } else {
          copyErrors = { ...copyErrors, [key]: null };
        }
      }
    });

    const isError = Object.values(copyErrors).some((error) => error !== null);

    if (isError) {
      setErrors(copyErrors);
      return;
    }

    const githubInfoLoader = async (username) => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      return response.json();
    };

    setErrors({});
    githubInfoLoader(searchValue)
      .then((resultData) => {
        updateUserData(resultData);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
        alert("Error fetching GitHub data. Please try again.");
      });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-SeacrhBarDarkBgColor dark:bg-SeacrhBarLightBgColor rounded-lg flex justify-between align-middle p-2 mb-8"
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
          className={
            "border-none font-light searchBarbg tracking-normal  dark:bg-SeacrhBarLightBgColor outline-SeacrhBarDarkBgColor text-UniversalParaColor bg-SeacrhBarDarkBgColor ml-8 " +
            (errors.searchValue ? "erroredField" : "")
          }
          type="text"
          placeholder="Github UserName "
          name="searchValue"
          onChange={handleChange}
        />
        <div className="mt-3">
          {errors["searchValue"] && (
            <label htmlFor="searchValue">
              <small className="text-white">{errors["searchValue"]}</small>
            </label>
          )}
        </div>
      </div>
      <div>
        <button
          value={data}
          onChange={handleChange}
          required
          className="searchBar-btn bg-UniversalBtnBgColor text-UniversalParaColor p-3 pl-6 rounded-xl pr-6"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
