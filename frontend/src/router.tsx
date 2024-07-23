import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='about' element={<AboutUsPage />} />
    <Route path='contact' element={<ContactUsPage />} />
  </Route>
));

export default router;