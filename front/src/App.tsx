// main imports
import { useEffect, useState } from "react";
//

// routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
//

// styles
import "./App.css";
import "./style/style.css";
//

// components
import { MainLayout } from "./components/MainLayoutComp/MainLayout";
import { HomePage } from "./components/HomePageComp/HomePageComp";
import Basket from "./components/BasketComp/BasketComp";
//

interface DataStructure {
  picture: string;
  price: string;
  title: string;
  rating: string;
  revies: string;
}

function App(): JSX.Element {
  const [data, setData] = useState<DataStructure[]>([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/64c800c38e4aa6225ec865ff")
      .then((response) => response.json())
      .then((data) => setData(data.record))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      {/* BrowserRouter - осуществляет роутинг (перемещение), между страницами*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout data={data}></MainLayout>}>
            <Route index element={<HomePage data={data}></HomePage>}></Route>
            <Route path="basket" element={<Basket></Basket>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
