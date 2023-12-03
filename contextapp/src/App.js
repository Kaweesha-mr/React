import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/navbar";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      
      <ThemeContextProvider>
      <Navbar />
      <BookList/>
      <ThemeToggle/>
      </ThemeContextProvider>


    </div>
  );
}

export default App;
