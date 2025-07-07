import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    paymentMethod: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Envoyer les données au backend
      console.log('Commande validée:', { ...formData, cart });
      clearCart();
      window.location.href = '/confirmation';
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Barre de progression */}
      <div className="flex mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex-1 text-center border-b-2 ${step >= i ? 'border-primary' : 'border-gray-300'} pb-2`}>
            <span className={`inline-block w-8 h-8 rounded-full ${step >= i ? 'bg-primary text-white' : 'bg-gray-200'} flex items-center justify-center mx-auto`}>
              {i}
            </span>
            <span className="block mt-2">
              {i === 1 ? 'Information' : i === 2 ? 'Paiement' : 'Confirmation'}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Étape 1: Informations */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Adresse</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows="3"
                required
              ></textarea>
            </div>
          </div>
        )}

        {/* Étape 2: Paiement */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Méthode de paiement</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleChange}
                  className="h-5 w-5"
                  required
                />
                <span>Carte de crédit</span>
              </label>
              {/* Ajoutez d'autres méthodes de paiement si nécessaire */}
            </div>
          </div>
        )}

        {/* Étape 3: Récapitulatif */}
        {step === 3 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif de commande</h2>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between border-b pb-2">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 font-bold text-lg">
              <div className="flex justify-between">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation entre étapes */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded"
            >
              Retour
            </button>
          ) : (
            <div></div>
          )}
          
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded"
          >
            {step < 3 ? 'Continuer' : 'Confirmer la commande'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;