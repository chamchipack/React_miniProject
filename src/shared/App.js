import './App.css';
import Add from '../pages/Add';
import Enter from '../pages/Enter';
import Main from '../pages/Main';
import Header from '../components/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Main}/>
      <Route exact path='/add' component={Add}/>
      <Route exact path='/userEnter' component={Enter}/>
    </div>
  );
}

export default App;
