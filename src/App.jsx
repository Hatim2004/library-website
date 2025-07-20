import SignIn from "./pages/SignIn";
import Root from "./pages/Root";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Employees from "./pages/Employees"
import Registrar from "./pages/Registrar"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route></Route>
      <Route index element={<SignIn />} />
      <Route path="registrar" element={<Registrar />} />
      <Route path="/" element={<Root />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Employees" element={<Employees />} />
         
      </Route>
    </Route>

  )
);


export default function MyApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}