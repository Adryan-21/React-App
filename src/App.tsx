import { FC, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore/explore";

import { Feed } from "./components/Feed/feed";
import { Navigation } from "./components/Navigation/navigation";

interface User {
  id: 1;
  name: "Leanne Graham";
  username: "Bret";
  email: "Sincere@april.biz";
  address: {
    street: "Kulas Light";
    suite: "Apt. 556";
    city: "Gwenborough";
    zipcode: "92998-3874";
    geo: {
      lat: "-37.3159";
      lng: "81.1496";
    };
  };
  phone: "1-770-736-8031 x56442";
  website: "hildegard.org";
  company: {
    name: "Romaguera-Crona";
    catchPhrase: "Multi-layered client-server neural-net";
    bs: "harness real-time e-markets";
  };
}

class User {
  constructor(props: any) {
    this.id = props.id;
    this.name = props.name;
    this.username = props.username;
    this.email = props.email;
    this.address = props.address;
    this.phone = props.phone;
    this.website = props.website;
    this.company = props.company;
  }
}

export const App: FC<any> = () => {
  let [user, setUser] = useState({});
  useEffect(() => {
    getData();
  }, []);

  async function getData(this: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const responseData = await response.json();
    setUser(responseData);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation user={new User(user)} />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
