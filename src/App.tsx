import AllEpisodes from './components/AllEpisodes'
import Header from './components/Header'
import "./styles.css";
import { useState } from "react";



function App():JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="head">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="container">
        <AllEpisodes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
}

export default App;
