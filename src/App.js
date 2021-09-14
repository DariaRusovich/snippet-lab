import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Snippet from "./components/Snippet";
import Categories from "./components/Categories";

function App() {
  const names = ["sdcsdc", "dcjsdvnjv", "kdncjnjds"]
  return (
    <>
      <Header></Header>
      <Categories data={names}></Categories>
      <div className="App"></div>
      <Switch>
        <Route path="/add">Add new Snippet</Route>
        <Route path="/">Snippet list</Route>
      </Switch>
    </>
  );
}

export default App;
