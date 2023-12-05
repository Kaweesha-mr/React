import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/navbar";
import AuthContextProvider from "./context/AuthContext";
import { BookCOntext } from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">

      <ThemeContextProvider>
        <AuthContextProvider>

          <Navbar />

          <BookCOntext>
            <BookList />
          </BookCOntext>

          <ThemeToggle />

        </AuthContextProvider>
      </ThemeContextProvider>


    </div>
  );
}

export default App;
