import {
    MessageBubble,
} from "./message-bubble";

export function Conversation({
    messages,
}: {
    messages: any[];
}) {

    return (
        <div
            className="flex-1
      space-y-4
      "
        >

            {messages.map(
                message => (

                    <MessageBubble
                        key={
                            message._id
                        }
                        sender={
                            message.sender
                        }
                        content={
                            message.content
                        }
                    />

                )
            )}

        </div>
    );
}