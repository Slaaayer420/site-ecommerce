import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;