import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:p-15 xl:px-20">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/movie/:id" element={<DetailPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
