import React from "react";
import NavbarComponent from "./Components/fixed/navbar";
import Footer from "./Components/fixed/footer";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./Components/landingPge";
import LoginAdmin from "./Components/Auth/loginAdmin";
import ProductDeatilsPage from "./pages/productDetails/productDeatilsPage";
import CartPage from "./pages/cart/cartPage";
import AdminAddProductPage from "./pages/admin/adminAddProductPage";
import AdminViewProductsPage from "./pages/admin/adminViewProductsPage";
import AdminAddOffers from "./Components/admin/adminaddoffers";
import AdminAddOffersPage from "./pages/admin/adminAddOffersPage";
import OfferDetailsPage from "./pages/productDetails/offerDetailsPage";
import AdminViewOffersPage from "./pages/admin/adminViewOffers";
import ProtectRouteHock from "./Components/protect/protect_Router_Hock";
import ProtectedRoute from "./Components/protect/protectRouter";

const App = () => {
  const [isUser, isAdmin, userDate] = ProtectRouteHock();
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDeatilsPage></ProductDeatilsPage>}
          ></Route>
          <Route path="/loginAdmin" element={<LoginAdmin></LoginAdmin>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>

          <Route
            path="/offers-details/:id"
            element={<OfferDetailsPage></OfferDetailsPage>}
          ></Route>

          {/* admin roles */}
          <Route element={<ProtectedRoute auth={isAdmin}></ProtectedRoute>}>
            <Route
              path="/admin/addproduct"
              element={<AdminAddProductPage></AdminAddProductPage>}
            ></Route>
            <Route
              path="/admin/viewproduct"
              element={<AdminViewProductsPage></AdminViewProductsPage>}
            ></Route>

            <Route
              path="/admin/offers"
              element={<AdminAddOffersPage></AdminAddOffersPage>}
            ></Route>
            <Route
              path="/admin/viewoffers"
              element={<AdminViewOffersPage></AdminViewOffersPage>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
