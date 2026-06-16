import { GeminiProvider } from "../providers/gemini.provider";
import { GroqProvider } from "../providers/groq.provider";

const providers = [
  new GeminiProvider(),
  new GroqProvider(),
];

export class AIProviderFactory {

  static getProviders() {
    return providers;
  }

}