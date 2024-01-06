import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
    </>
  )
);
export default router;
