import { AlertOctagonIcon } from "lucide-react";

interface ErrorStateProps {
  message?: string;
}

export function ErrorState({
  message,
}: ErrorStateProps) {
  return (
    <div className="border mt-6 border-red-300 text-red-400 rounded-lg p-6">
      <p className="flex items-center gap-3">
        <AlertOctagonIcon/>
        {message ||
          "Something went wrong"}
      </p>
    </div>
  );
}