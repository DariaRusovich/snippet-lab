import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Editor from './pages/Editor';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Snippet from './pages/Snippet';
import Snippets from './pages/Snippets';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={['/editor', '/editor/:id']}>
            <Editor />
          </Route>
          <Route exact path="/snippets">
            <Snippets />
          </Route>
          <Route excat path="/snippet/:id">
            <Snippet />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
