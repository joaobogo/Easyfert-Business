import React from "react";
import Home from "./routes/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartProvider from "./context/Cartprovider";
import ShoppingCart from "./routes/ShoppingCart";
import About from "./routes/About";
import Payment from "./routes/Payment";
import ProductDetails from "./routes/ProductDetails";
import Admin from "./routes/Admin";
import Adminprovider from "./context/Adminprovider";
import User from "./routes/User";
import Stripe from "./components/Stripe";
import ConfirmationPage from "./components/ConfirmationPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserProfile from "./routes/UserProfile";
import SignUp from "./routes/SignUp"
import Login from "./routes/Login";
import Inventory from "./routes/Inventory";
import Blog from "./routes/Blog";
import Blogdetails from "./routes/Blogdetails";
import Wishlist from "./routes/Wishlist";
import Myaccount from "./routes/Myaccount";

function App() {
  return (
    <CartProvider>
      <Adminprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<ShoppingCart />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout/form" element={<Login><Payment/></Login>} />
            <Route path="/login" element={<Login><Home/></Login>} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
              path="/home/dashboard"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            ></Route>
             <Route
              path="/home/dashboard/inventory"
              element={
                <ProtectedRoute>
                  <Inventory />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/home/dashboard/user"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/creditcard" element={<Stripe />} />
            <Route
              path="/confirmationpage/:id"
              element={<ConfirmationPage />}
            />
            <Route path="/userprofile" element={<Login><UserProfile/></Login>} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signup/:email" element={<SignUp/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<Blogdetails />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/myaccount" element={<Myaccount/>} />
          </Routes>
        </BrowserRouter>
      </Adminprovider>
    </CartProvider>
  );
}

export default App;
