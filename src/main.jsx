import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Link, RouterProvider, Outlet } from "react-router-dom"
import ErrorPage from './components/ErrorPage.jsx'
import NotFound from './components/NotFound.jsx'
import Movie from './components/Movie.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import TvShow from './components/TvShow.jsx'
import LoginForm from './components/LoginForm.jsx'
import RegisterForm from './components/RegisterForm.jsx'
import AllMovies from './components/AllMovies.jsx'
import AllTvShows from './components/AllTvShows.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/react-johnflix",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "movies",
        element: (
          <>
            <AllMovies />
            {/* <Link to="/movies/movie/:id">See details</Link> */}
          </>
        ),
      },
      {
        path: "all-tv-show",
        element: (
          <>
            <AllTvShows />
           {/*  <Link to="/all-tv-show/tv-show/:id">See details</Link> */}
          </>
        ),
      },
      {
        path: "login",
        element: (
          <>
            <LoginForm />
          </>
        )
      },
      {
        path: "register",
        element: (
          <>
            <RegisterForm />
          </>
        )
      },
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "movies/movie/:id",
    element: (
     <Movie />
    )
  },
  {
    path: "all-tv-show/tv-show/:id",
    element: (
     <TvShow />
    )
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
