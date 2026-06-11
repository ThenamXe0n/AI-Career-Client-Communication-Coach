"use client";

import { useState } from "react";
import { SendHorizonal, Loader2 } from "lucide-react";

import { useSendMessage } from "../hooks/use-send-message";

export function MessageForm({
    interviewId,
}: {
    interviewId: string;
}) {
    const [message, setMessage] =
        useState("");

    const sendMessageMutation =
        useSendMessage();

    const handleSend =
        async () => {
            if (
                !message.trim() ||
                sendMessageMutation.isPending
            ) {
                return;
            }

            await sendMessageMutation.mutateAsync({
                interviewId,
                content: message,
            });

            setMessage("");
        };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (
            e.key === "Enter" &&
            !e.shiftKey
        ) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div
            className="
            sticky
            bottom-0
            border-t
            border-zinc-800
            bg-black/80
            backdrop-blur-xl
            p-4
            "
        >
            <div
                className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950
                p-2
                focus-within:border-violet-500
                transition-colors
                "
            >
                <input
                    value={message}
                    onChange={(e) =>
                        setMessage(
                            e.target.value
                        )
                    }
                    onKeyDown={
                        handleKeyDown
                    }
                    placeholder="Type your answer..."
                    className="
                    flex-1
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    outline-none
                    placeholder:text-zinc-500
                    "
                />

                <button
                    onClick={
                        handleSend
                    }
                    disabled={
                        !message.trim() ||
                        sendMessageMutation.isPending
                    }
                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-violet-600
                    text-white
                    transition-all
                    hover:bg-violet-500
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    "
                >
                    {sendMessageMutation.isPending ? (
                        <Loader2
                            size={18}
                            className="animate-spin"
                        />
                    ) : (
                        <SendHorizonal
                            size={18}
                        />
                    )}
                </button>
            </div>

            <p
                className="
                mt-2
                text-center
                text-xs
                text-zinc-500
                "
            >
                Press Enter to send
            </p>
        </div>
    );
}