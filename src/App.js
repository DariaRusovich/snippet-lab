import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Categories from "./components/Categories";
import AddNewSnippet from "./components/AddNewSnippet";
import SnippetList from "./components/SnippetList";

function App() {
  return (
    <>
      <Header></Header>

      <div className="container app-container">
        <Categories></Categories>

        <div className="page">
          <Switch>
            <Route path="/add">
              <AddNewSnippet></AddNewSnippet>
            </Route>
            <Route path="/edit/:id">
              <AddNewSnippet></AddNewSnippet>
            </Route>
            <Route path="/">
              <SnippetList></SnippetList>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
