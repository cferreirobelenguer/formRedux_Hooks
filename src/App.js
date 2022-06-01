
//Proyect with React Redux
import './App.css';
import Formulario from '../src/components/Formulario';
import store from './store/store'
import { Provider } from 'react-redux';

function App() {
 
  return (
    
    <Provider store={store}>
      {/*Provider connect the store with the app*/}
    <div className="App">
        <header className="App-header">
          <h1>Formulario Redux</h1>
        </header>
        <Formulario className="App-body" />
        
    </div>
    </Provider>
  );

}

export default App