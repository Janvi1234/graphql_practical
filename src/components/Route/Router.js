import React from "react";
import { Route, Switch } from "react-router";
import Home from "../../pages/Home";
import Header from "../Header";
import Footer from "../Footer";
import Post from "../../pages/Post";
import CreatePost from "../../pages/CreatePost";

const ROUTES = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: '/post/:id',
    exact: true,
    component: Post,
  },
  {
    path: '/add',
    exact: true,
    component: CreatePost,
  }
];
const Router = () => {
  return (
    <>
      <Header />
      <Switch>
        {ROUTES.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={() => <route.component />}
          />
        ))}
        <Route path='*' component={<div>Page not found!!!!!!</div>}/>
      </Switch>
      <Footer />
    </>
  );
};

export default Router;
