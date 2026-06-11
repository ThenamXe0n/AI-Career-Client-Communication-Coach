"use client";

import { motion } from "framer-motion";
import { Bot, User2 } from "lucide-react";

interface Props {
  sender: string;
  content: string;
  isTyping?: boolean;
}

export function MessageBubble({
  sender,
  content,
  isTyping = false,
}: Props) {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        flex
        gap-3
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      {/* AI Avatar */}

      {!isUser && (
        <div
          className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-violet-500/20
          bg-violet-500/10
          text-violet-400
          "
        >
          <Bot size={18} />
        </div>
      )}

      {/* Bubble */}

      <div
        className={`
          max-w-[80%]
          rounded-2xl
          px-4
          py-3
          ${
            isUser
              ? `
                rounded-br-md
                bg-violet-600
                text-white
              `
              : `
                rounded-bl-md
                border
                border-zinc-800
                bg-zinc-950
                text-zinc-100
              `
          }
        `}
      >
        {/* Header */}

        <div className="mb-2">
          <span
            className="
            text-xs
            font-medium
            opacity-70
            "
          >
            {isUser
              ? "You"
              : "AI Interviewer"}
          </span>
        </div>

        {/* Typing State */}

        {isTyping ? (
          <div className="flex items-center gap-1">
            <span
              className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-violet-400
              [animation-delay:-0.3s]
              "
            />

            <span
              className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-violet-400
              [animation-delay:-0.15s]
              "
            />

            <span
              className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-violet-400
              "
            />
          </div>
        ) : (
          <p
            className="
            whitespace-pre-wrap
            break-words
            text-sm
            leading-6
            "
          >
            {content}
          </p>
        )}
      </div>

      {/* User Avatar */}

      {isUser && (
        <div
          className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          "
        >
          <User2 size={18} />
        </div>
      )}
    </motion.div>
  );
}