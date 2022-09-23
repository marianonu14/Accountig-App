import Header from "./components/Header";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <main className="h-[90%] flex">
        <Navigation />
        <Layout />
      </main>
    </div>
  );
}

export default App;
