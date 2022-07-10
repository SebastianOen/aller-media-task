import "./App.css";
import ArticleRow from "./components/ArticleRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const url =
    "https://storage.googleapis.com/aller-structure-task/test_data.json";

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    };

    fetchData().catch(console.error);
  }, []);
  const rows = data[0]?.map((result, index) => (
    <ArticleRow key={index} {...result} />
  ));

  return (
    <div className="App">
      <Header />
      <div className="Container">{rows}</div>
    </div>
  );
}

export default App;
