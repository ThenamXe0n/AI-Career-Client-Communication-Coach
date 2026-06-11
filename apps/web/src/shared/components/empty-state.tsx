interface EmptyStateProps {
    title: string;
    description: string;
}

export function EmptyState({
    title,
    description,
}: EmptyStateProps) {
    return (
        <div className="border rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <p className="text-gray-500 mt-2">
                {description}
            </p>
        </div>
    );
}