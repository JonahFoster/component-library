import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductCard from './routes/ProductCard';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/product-card" element={<ProductCard />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
