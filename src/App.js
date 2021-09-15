import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Snippet from "./components/Snippet";
import Categories from "./components/Categories";
import AddNewSnippet from "./components/AddNewSnippet";
import SearchField from "./components/SearchField";
import NewSnippet from "./components/NewSnippet";


function App() {
  
  return (
    <>
      <Header></Header>
     <SearchField></SearchField>
      <NewSnippet></NewSnippet>
      {/* <Switch>
        <Route path="/add">Add new Snippet</Route>
        <Route path="/">Snippet list</Route>
      </Switch> */}
    </>
  );
}

export default App;
