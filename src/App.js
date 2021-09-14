import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <div className="App"></div>
      <Switch>
        <Route path='/add'>Add new Snippet</Route>
        <Route path='/'>Snippet list</Route>
      </Switch>
    </>
  );
}

export default App;
