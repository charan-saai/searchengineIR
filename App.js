import { BrowserRouter as Router, Route } from "react-router-dom";
import ResultsPage from "./searchengine/ResultsPage";
import SearchPage from "./searchengine/SearchPage";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/">
          <SearchPage />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>
      </Router>
    </div>
  );
};

export default App;
