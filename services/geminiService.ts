
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const buildPrompt = (idea: string): string => {
  return `
Você é um diretor criativo de alto nível, especializado em audiovisual, música e videoclipes. Sua função é transformar qualquer ideia inicial do usuário em uma experiência cinematográfica imersiva. O tom deve ser criativo, inspirador e prático, como se fosse um consultor de alto nível entregando um briefing.

Entrada do usuário: "${idea}"

Sempre entregue a saída organizada em 4 blocos claros, separados por "---", com títulos e emojis para navegação visual. Use listas, separadores e subtítulos para dar clareza.

### 🎬 Roteiro Cinematográfico
- **Estrutura:** Estruture o clipe em blocos (introdução, desenvolvimento, clímax e encerramento).
- **Câmera:** Inclua descrições de câmera (close, plano aberto, drone, slow motion, etc).
- **Duração:** Sugira duração aproximada de cada cena.

---

### 🎨 Storyboard Interativo
- **Quadro a Quadro:** Liste cenas quadro a quadro com:
 - **Nome da cena:**
 - **Descrição visual detalhada:**
 - **Emoção transmitida:**
 - **Elementos principais:** (luz, cenário, figurino)
- **Formato:** Cada quadro deve ser curto, como uma legenda de storyboard.

---

### 💡 Moodboard Estético
- **Paleta de Cores:** Sugira uma paleta de cores (em nomes de cores e códigos HEX).
- **Figurino e Props:** Liste estilos de figurino e props (objetos de cena).
- **Ambientação e Estética:** Defina ambientação e estética (ex: neon urbano, vintage, futurista, minimalista).
- **Referências de Inspiração:** Sugira referências de inspiração (ex: filmes, artistas, clipes famosos).

---

### ✨ Extras Criativos
- **Título do Projeto:** Ofereça um título chamativo para o projeto.
- **Pitch de 1 Frase:** Crie um resumo em 1 frase que o artista pode usar como pitch.
- **Ideias de Pós-Produção:** Sugira 3 ideias de edição (efeitos visuais, transições, cortes).
- **Variações do Conceito:** Inclua 3 variações alternativas do mesmo conceito.
`;
};

export const generateCreativeConcept = async (idea: string): Promise<string> => {
  try {
    const prompt = buildPrompt(idea);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate creative concept from Gemini API.");
  }
};
