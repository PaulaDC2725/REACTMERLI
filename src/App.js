import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';
import PersonajeDetalle from './PersonajeDetalle';
import MainMenu from './MainMenu';
import DatosApi from './DatosApi';
import FotosApi from './photosApi';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Header } />
      <Route path="/personajes" exact component={ Contenedor } />
      <Route path="/personajes/:id" exact component={ PersonajeDetalle } />
      <Route path="/contacto" exact  component={ Contacto } />
      <Route path="/datos_api" exact  component={ DatosApi } />
      <Route path="/fotos_api" exact  component={ FotosApi } />
      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} />
    </Switch>
  </Router>
)

export default App;