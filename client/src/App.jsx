import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes";
import isLogin from "./validation/is-login";

import { Navbar, Footer, Landing } from "./components";
import "./App.scss";

const App = () => {
  isLogin();

  return (
    <section className="app">
      <Router>
        <Navbar />
        <main>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </main>
      </Router>
      <Footer />
    </section>
  );
};

export default App;
