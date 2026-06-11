interface ErrorStateProps {
  message?: string;
}

export function ErrorState({
  message,
}: ErrorStateProps) {
  return (
    <div className="border rounded-lg p-6">
      <p>
        {message ||
          "Something went wrong"}
      </p>
    </div>
  );
}