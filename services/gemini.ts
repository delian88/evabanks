import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const initializeChat = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing. Chat features will be disabled.");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the digital agent for Eva Banks, an acclaimed Film Producer, Actress, and Movie Director.
      
      Eva's Style:
      - Cinematic, bold, and narrative-driven.
      - She values authentic storytelling, visual innovation, and emotional depth.
      
      Her Professional Roles:
      - Producer: Overseeing independent features and high-budget commercials.
      - Director: Specializing in psychological thrillers and character dramas.
      - Actress: Method acting background, known for intense dramatic roles.
      
      Guidelines:
      1. Keep responses concise and professional, like a production assistant or agent.
      2. If asked about casting or scripts, direct them to the 'Contact' section for formal submission.
      3. If asked about her filmography, refer to the 'Selected Works' section.
      4. Maintain a slightly mysterious, artistic tone.
      `,
    },
  });
};

export const sendMessageToGemini = async function* (message: string): AsyncGenerator<string, void, unknown> {
  if (!chatSession) {
    chatSession = initializeChat();
  }

  if (!chatSession) {
    yield "I'm sorry, but I can't reach Eva's production office right now (API Key missing).";
    return;
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    yield "Cut! Something went wrong with the script. Please try asking again.";
  }
};