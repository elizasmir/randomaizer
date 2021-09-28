import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import "./styles/App.scss";


export interface IUser {
  firstName: string
  lastName: string
  country: string
  avatar: string
}


const App = () => {
  const [randomUser, setRandomUser] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        if (
          Array.isArray(response.data.results) &&
          response.data.results.length > 0
        ) {
          const userData = response.data.results[0];

          const user: IUser = {
            avatar: `${userData.picture.large}`,
            firstName: `${userData.name.first}`,
            lastName: `${userData.name.last}`,
            country: `${userData.location.country}`,
          };

          setRandomUser(user);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="App">
      <header className="App-header">
        <h1>Randomizer</h1>
      </header>
      {isLoading ? <div>...loading</div> : <UserCard user={randomUser} />}
    </section>
  );
};

export default App;
