import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coins, setCoins] = useState(0);

  const handleCoins = (cost) => {
      if (cost) {
      const remainingCoins = coins - cost;
      setCoins(remainingCoins);
    } else {
      const allCoins = coins + 8000000;
      setCoins(allCoins);
    }
  };

  const [active, setActive] = useState(true);

  const handleActiveBtn = () => {
    setActive(!active);
  };

  return (
    <>
      <Header coins={coins}></Header>
      <Banner handleCoins={handleCoins}></Banner>
      <MainContainer
        handleActiveBtn={handleActiveBtn}
        active={active}
        handleCoins={handleCoins}
        coins={coins}
        toast={toast}
      ></MainContainer>
      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;
