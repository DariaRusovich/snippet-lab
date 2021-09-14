import { Route, Switch } from "react-router";
import Header from "./components/Header";





function App() {
  return (
    <>
    <Header>
     
    </Header>
      <div className="App"></div>
      <Switch>
        <Route path='/add'>Add new Snippet</Route>
        <Route path='/'>Snippet list</Route>
      </Switch>
    </>
  );
}

export default App;
