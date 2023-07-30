// routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
//

// styles
import "./App.css";
import "./style/style.css";
//

// components
import MainLayout from "./components/MainLayoutComp/MainLayout";
import HomePage from "./components/HomePageComp/HomePageComp";
import Basket from "./components/BasketComp/BasketComp";
//

function App(): JSX.Element {
  return (
    <div className="App">
      {/* BrowserRouter - осуществляет роутинг (перемещение), между страницами*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout></MainLayout>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="basket" element={<Basket></Basket>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
