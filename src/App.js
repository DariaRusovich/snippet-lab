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

      <div className="container app-container">
        <Categories></Categories>
        <div>
         <div className="page">
         <Switch>
            <Route path="/add">
              <AddNewSnippet></AddNewSnippet>
            </Route>
            <Route path="/">
              <SnippetList></SnippetList>
            </Route>
          </Switch>
         </div>
        </div>
      </div>
    </>
  );
}

export default App;
