import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Snippet from "./components/Snippet";
import Categories from "./components/Categories";
import AddNewSnippet from "./components/AddNewSnippet";
import SearchField from "./components/SearchField";
import NewSnippet from "./components/NewSnippet";
import SnippetList from "./components/SnippetList";


function App() {
  
  return (
    <>
      <Header></Header>
     
      <div className="container">
      <div className="content-wrapper">
      <Categories></Categories>
      <div>
      <SearchField></SearchField>
      <SnippetList></SnippetList>
      </div>
      </div>
      </div>
     
      {/* <Switch>
        <Route path="/add">Add new Snippet</Route>
        <Route path="/">Snippet list</Route>
      </Switch> */}
    </>
  );
}

export default App;
