import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/navbar";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      
      <ThemeContextProvider>
        <AuthContextProvider>

      <Navbar />
      <BookList/>
      <ThemeToggle/>
      
      </AuthContextProvider>
      </ThemeContextProvider>


    </div>
  );
}

export default App;
