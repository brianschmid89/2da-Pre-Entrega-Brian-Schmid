import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a SportClub!"}/>
    </div>
  );
}

export default App;
