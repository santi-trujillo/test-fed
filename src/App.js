import logo from './logo.svg';
import './App.css';
import UserForm from "./components/user-form"

function App() {
  return (
    <div className="App">
      <div class="box-one">
        <div>
            <h1>DIRECCIÓN DE ENVÍO</h1>
        </div>
        <UserForm />
    </div>

    <div class="box-two">
        <h1>RESUMEN DE LA ORDEN</h1>
    </div>
    </div>
  ); 
}

export default App;
