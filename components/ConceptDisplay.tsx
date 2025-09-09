import React from 'react';

interface ConceptDisplayProps {
  concept: string;
}

interface Section {
  title: string;
  content: string;
}

const parseContent = (content: string): JSX.Element[] => {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    return lines.map((line, index) => {
        if (line.trim().startsWith('- **')) {
            const parts = line.trim().substring(2).split('**');
            return (
                <li key={index} className="mb-2 ml-4 text-gray-400">
                    <strong className="font-semibold text-orange-400">{parts[1]}</strong>
                    {parts[2]}
                </li>
            );
        }
        if (line.trim().startsWith('- ')) {
            return <li key={index} className="mb-2 list-disc ml-8 text-gray-400">{line.substring(2)}</li>;
        }
        if (line.trim().startsWith('**')) {
             const parts = line.trim().split('**');
             return (
                <p key={index} className="mb-2 mt-4 text-gray-400">
                    <strong className="font-semibold text-orange-400">{parts[1]}</strong>
                    {parts[2]}
                </p>
            );
        }
        if (/#[a-fA-F0-9]{6}/.test(line)) {
            const hexMatch = line.match(/(#[a-fA-F0-9]{6})/);
            if(hexMatch) {
                const color = hexMatch[0];
                return (
                    <li key={index} className="flex items-center gap-3 mb-2 list-disc ml-8 text-gray-400">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-700" style={{ backgroundColor: color }}></div>
                        <span>{line.substring(2)}</span>
                    </li>
                )
            }
        }
        return <p key={index} className="mb-2 text-gray-500">{line}</p>;
    });
};


const ConceptDisplay: React.FC<ConceptDisplayProps> = ({ concept }) => {
  const sections: Section[] = concept.split('---').map(part => {
    const lines = part.trim().split('\n');
    const title = lines.shift() || '';
    const content = lines.join('\n');
    return { title, content };
  }).filter(s => s.title);

  return (
    <div className="space-y-8 animate-fade-in">
      {sections.map(({ title, content }, index) => (
        <div key={index} className="bg-black/20 p-6 rounded-xl border border-gray-800 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{title}</h2>
          <div className="prose prose-invert max-w-none prose-p:text-gray-400 prose-li:text-gray-400">
            <ul>
                {parseContent(content)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConceptDisplay;