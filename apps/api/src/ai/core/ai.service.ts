import { AIProviderFactory } from "./ai-provider.factory";
import { retry } from "./retry";

export class AIService {
  async generate(prompt: string) {
    const providers = AIProviderFactory.getProviders();

    let lastError;

    for (const provider of providers) {
      try {
        console.log(`Trying provider: ${provider.constructor.name}`);

        let res = await retry(() => provider.generate(prompt), 3);
        console.log(`Success: ${provider.constructor.name}`);
        return res;
      } catch (error) {
        console.error(provider.constructor.name, "failed");

        lastError = error;
      }
    }

    throw lastError;
  }
}
