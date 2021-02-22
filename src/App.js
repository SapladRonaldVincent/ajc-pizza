import './App.css'; 
import Home from './Admin/Pages/Home';
import Menu from './Admin/Pages/Menu';
import Orders from './Admin/Pages/Orders';

import MarerialUIDrawer from './Admin/Components/Drawer'; 
import { BrowserRouter, Route, Switch } 
	from 'react-router-dom'; 

function App() { 
return ( 
	<div className="App"> 

    <BrowserRouter> 
     <MarerialUIDrawer/> 
      <Switch> 
        <Route exact path='/' render= 
          {props => <Home {...props} /> }/> 
        <Route exact path='/Menu' render= 
            {props => <Menu {...props} /> }/> 
         <Route exact path='/Orders' render= 
            {props => <Orders {...props} /> }/> 
    </Switch> 
	</BrowserRouter> 
	</div> 
); 
} 

export default App; 
