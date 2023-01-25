import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.element}/>
        )
        : publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.element}/>
        )
      }
    </Routes>
  );
};

export default AppRouter;