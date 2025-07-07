import { useState } from 'react';

function Survey() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez envoyer les données à votre API
    console.log({ rating, feedback });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
        Merci pour votre feedback!
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Donnez-nous votre avis</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Notez votre expérience</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Votre feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows="3"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Survey;