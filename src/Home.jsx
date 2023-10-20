import { useContext } from "react";
import Header from "./components/Header"
import { AppContext, AppContextProvider } from "./context/AppContext";

const Home = () => {

    const appContext = useContext(AppContext);
    console.log(appContext);
  return (
    <div>
        <AppContextProvider>
            <Header/>
            <main>this is main</main>
        </AppContextProvider>


        <footer>this is footer</footer>
    </div>
  );
};

export default Home