import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeCustomOrderImage = async (base64Image: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Mocking response.");
    return "API Key missing. This represents a technical analysis of your furniture image, suggesting Mahogany wood and dimensions of 24x48 inches.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Clean base64 string if it contains data URI prefix
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: cleanBase64
            }
          },
          {
            text: `You are an expert Ghanaian master carpenter. Analyze this image of a furniture piece or sketch. 
            Provide a technical breakdown for a custom order. 
            Include:
            1. Suggested local Ghanaian wood type (e.g., Odum, Mahogany, Teak, Wawa) and why.
            2. Estimated dimensions based on standard proportions.
            3. Construction complexity (Low/Medium/High).
            4. Key aesthetic features observed.
            Keep the tone professional, encouraging, and succinct.`
          }
        ]
      }
    });

    return response.text || "Could not analyze image.";
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "Failed to analyze the image. Please try again or describe your request manually.";
  }
};
