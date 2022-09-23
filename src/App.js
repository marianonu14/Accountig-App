import Header from "./components/Header";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

const App = () => {
  const handlePages = (value) => {
    console.log(value)
  }
  return (
    <div className="h-screen">
      <Header />
      <main className="h-[90%] flex">
        <Navigation handlePages={handlePages} />
        <Layout />
      </main>
    </div>
  );
}

export default App;
