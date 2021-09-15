import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Snippet from "./components/Snippet";
import Categories from "./components/Categories";
import AddNewSnippet from "./components/AddNewSnippet";

function App() {
  
  return (
    <>
      <Header></Header>
      <AddNewSnippet> </AddNewSnippet>
      
      {/* <Switch>
        <Route path="/add">Add new Snippet</Route>
        <Route path="/">Snippet list</Route>
      </Switch> */}
    </>
  );
}

export default App;
