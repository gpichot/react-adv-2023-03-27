import { Link, Route, Switch } from "react-router-dom";

import { PokemonForm } from "./features/pokemons";
import PokemonList from "./features/pokemons/components/PokemonList";

import "./globals.scss";

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">Home</Link>
        <Link to="/new">New Pokemon</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/new">
          <PokemonForm />
        </Route>
        <Route path="/funnel">
          <Funnel />
        </Route>
      </Switch>
    </div>
  );
}

function Funnel() {
  return (
    <div>
      <h1>Funnel</h1>
      <p>
        <Link to="/">Go back</Link>
        <Link to="/funnel/step1">Step 1</Link>
        <Link to="/funnel/step2">Step 2</Link>
      </p>
      <Switch>
        <Route path="/funnel/step1">
          <h1>Step 1</h1>
        </Route>
        <Route path="/funnel/step2">
          <h1>Step 2</h1>
        </Route>
      </Switch>
    </div>
  );
}
