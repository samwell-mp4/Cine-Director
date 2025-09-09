
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import CreativeInput from './components/CreativeInput';
import ConceptDisplay from './components/ConceptDisplay';
import LoadingScreen from './components/LoadingScreen';
import { generateCreativeConcept } from './services/geminiService';

const App: React.FC = () => {
  const [idea, setIdea] = useState<string>('');
  const [concept, setConcept] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!idea.trim()) {
      setError('Por favor, insira uma ideia para começar.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setConcept(null);

    try {
      const result = await generateCreativeConcept(idea);
      setConcept(result);
    } catch (e) {
      console.error(e);
      setError('Ocorreu um erro ao gerar o conceito. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [idea]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <main>
          <CreativeInput
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
          {error && <div className="mt-4 text-center text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</div>}
          
          {isLoading && <LoadingScreen />}
          
          {concept && !isLoading && (
            <div className="mt-12">
              <ConceptDisplay concept={concept} />
            </div>
          )}
        </main>
        <footer className="text-center mt-12 text-gray-500 text-sm">
            <p>Powered by Gemini API</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
