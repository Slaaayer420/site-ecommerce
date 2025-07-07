import { useState } from 'react';

function Survey({ onClose }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez envoyer les données à votre API
    console.log({ rating, feedback });
    setSubmitted(true);
    
    // Ferme automatiquement après 2 secondes
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Aidez-nous à améliorer votre expérience</h3>
      
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Merci pour votre feedback !
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Comment évaluez-vous votre expérience d'achat ?
            </label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">
              Vos suggestions (optionnel)
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows="3"
              placeholder="Qu'est-ce que nous pourrions améliorer ?"
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Passer
            </button>
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded"
              disabled={rating === 0}
            >
              Envoyer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Survey;