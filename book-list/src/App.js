import BookDetails from "./components/BookDetails";
import Navbar from "./components/navbar";
import BookContextProvider from "./context/BookContext";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">

      <BookContextProvider>
        <Navbar />
        <BookList/>
        
      </BookContextProvider>


    </div>
  );
}

export default App;
