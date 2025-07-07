import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Survey from '../components/Survey';

function Confirmation() {
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    // Affiche le popup automatiquement après 1 seconde
    const timer = setTimeout(() => {
      setShowSurvey(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Popup de confirmation principale */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4">Commande confirmée !</h1>
        <p className="text-gray-600 mb-6">
          Merci pour votre achat. Un email de confirmation vous a été envoyé.
          <br />
          N° de commande: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium inline-block"
        >
          Retour à l'accueil
        </Link>
      </div>

      {/* Popup de sondage */}
      {showSurvey && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowSurvey(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <Survey onClose={() => setShowSurvey(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Confirmation;