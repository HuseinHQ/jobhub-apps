import { useState } from "react";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";

function App() {
  const [page, setPage] = useState("a");
  const renderPage = () => {
    if (page === "login") {
      return <Login setPage={setPage} />;
    } else if (page === "dashboard") {
      return <Dashboard />;
    } else {
      return <Table />;
    }
  };

  return (
    <>
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
