import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useParams } from 'react-router-dom';
import Layout from './layout/Layout';

// Components
import Home from './components/pages/Home';
const About = () => <div>About</div>;
const Login = () => <div>Login</div>;
const NotFound = () => <div>404 Not Found</div>;
const ProductList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  return (
    <div>
      <h2>Product List</h2>
      {id && <p>Query Parameter: id = {id}</p>}
    </div>
  );
};
// Protected Route Component
const Dashboard = () => <div>Dashboard</div>;

// Route Parameter Component
const UserDetails = () => {
  let { id } = useParams();
  return <div>User ID: {id}</div>;
};
const ProductDetails = () => {
  let { id } = useParams();
  return (
    <div>
      <div>product details</div>
      <div >Product ID: {id}</div>
    </div>)
    ;
};

const App = () => {
  const isAuthenticated = false; // Replace with your authentication logic

  // Custom Route Guard
  const requireAuth = (component) => {
    return isAuthenticated ? component : <Navigate to="/login" />;
  };

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={requireAuth(<Dashboard />)}
          />

          {/* Nested Routes */}
          <Route path="/products">
            {/* http://localhost:3000/products?id=123 */}
            <Route index element={<ProductList />} />
            {/* http://localhost:3000/products/details/123 */}
            <Route path="details/:id" element={<ProductDetails />} />
          </Route>

          {/* Route Parameters */}
          {/* http://localhost:3000/users/21 */}
          <Route path="/users/:id" element={<UserDetails />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
