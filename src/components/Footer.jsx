import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">E-Shop</h3>
            <p className="text-gray-400">Votre boutique en ligne préférée pour des produits de qualité.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Produits</Link></li>
              <li><Link to="/checkout" className="text-gray-400 hover:text-white">Panier</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              3525 SEG Street<br />
              K1S4P3 Ottawa, Ontario<br />
              contact@eshop.com<br />
              +1 613-456-7891
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} E-Shop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;