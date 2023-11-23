import './App.css';
import Header from './components/Header';
import Blance from './components/Blance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
      <Blance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction />
      </div>

    </div>
  );
}

export default App;
