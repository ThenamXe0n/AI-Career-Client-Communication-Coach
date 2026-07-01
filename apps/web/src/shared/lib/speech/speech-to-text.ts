import { SpeechRecognitionOptions } from "./speech.types";

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export function createSpeechRecognition(
  options?: SpeechRecognitionOptions
) {
  if (typeof window === "undefined") {
    throw new Error("Speech recognition is only available in the browser.");
  }

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    throw new Error(
      "Speech Recognition is not supported in this browser."
    );
  }

  const recognition = new SpeechRecognition();

  recognition.lang = options?.lang ?? "en-US";
  recognition.continuous = options?.continuous ?? false;
  recognition.interimResults =
    options?.interimResults ?? true;

  return recognition;
}