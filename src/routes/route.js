import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart } from "pages";
import { Slide } from "components";
const Routes = () => {
  const [visible, setVisible] = useState(false);
  const prevY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currY = window.scrollY;

      if (prevY.current > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      prevY.current = currY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);
  return (
    <Router>
      {visible && (
        <div
          id="to-top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/slide" component={Slide} />
      </Switch>
    </Router>
  );
};

export default Routes;
