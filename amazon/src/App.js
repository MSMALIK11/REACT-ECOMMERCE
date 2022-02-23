import Home from "./component/Home.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleProduct from "./component/SingleProduct.jsx";
import Cart from "./component/Cart.jsx";
import { TemplateProvider } from "./component/template/TemplateProvider.jsx";
import Account from "./component/profile/Account.jsx";
import RightInfo from "./Admin/component/RightInfo.jsx";

function App() {
  return (
    <>
      <TemplateProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={SingleProduct} />
            <Route exact path="/cart/item" component={Cart} />
            <Route exact path="/profile" component={Account} />
            <Route exact path="/admin" component={RightInfo} />
          </Switch>
        </BrowserRouter>
      </TemplateProvider>
    </>
  );
}

export default App;
