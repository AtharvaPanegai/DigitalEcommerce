/** @format */

import "./App.css";
import Header from "./Header";
import Home from "./Home";
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./CheckOut";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import PaymentComponent from "./PaymentComponent";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Download from "./Download";

const promise = loadStripe(
  ""
  // your public key will go here
);

// ्default page should alwyas in the last otherwise it won't work
function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    //will run only once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user is just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/download'>
            <Header />
            <Download />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <CheckOut />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <PaymentComponent />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
