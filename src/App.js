import Card from "./Components/Card";
import { useState } from "react";
import { CircleLoader } from "react-spinners";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="App">
        <div className="p-4 w-full bg-white shadow-md flex justify-between items-center">
          <a href="/">
            <p className="font-bold cursor-pointer">XYZ</p>
          </a>
          <button onClick={handleClick}>
            <span className=" cursor-pointer font-semibold rounded-[7px] border-2 border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white duration-500">
              Get Users
            </span>
          </button>
        </div>
        {loading ? (
          <div className="item-center justify-center flex">
            <CircleLoader size={100} color={"#123abc"} />
          </div>
        ) : (
          data.map((item) => (
            <div className="flex overflow-auto w-full">
              <Card
                firstName={item.first_name}
                lastName={item.last_name}
                image={item.avatar}
                email={item.email}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
