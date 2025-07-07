import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Merci pour votre commande!</h1>
        <p className="text-gray-600 mb-6">Votre commande #12345 a été passée avec succès. Vous recevrez un email de confirmation sous peu.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="font-semibold mb-2">Récapitulatif de la commande</h2>
          <div className="flex justify-between mb-1">
            <span>Sous-total:</span>
            <span>$129.97</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Livraison:</span>
            <span>$5.99</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Taxes:</span>
            <span>$12.60</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total:</span>
            <span>$148.56</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium"
          >
            Retour à l'accueil
          </Link>
          <Link 
            to="/" 
            className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium"
          >
            Voir mes commandes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;