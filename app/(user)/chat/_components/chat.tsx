"use client";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircleIcon } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  return (
    <>
      <div className="flex flex-col h-full gap-4">
        <Conversation className="h-full">
          {messages.length === 0 ? (
            <ConversationEmptyState icon={<MessageCircleIcon />} />
          ) : (
            <ConversationContent>
              {messages.map((message) =>
                message.parts.map((part, index) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <Message
                          key={`${message.id}-${index}`}
                          from={message.role}
                        >
                          <MessageContent>
                            <MessageResponse>{part.text}</MessageResponse>
                          </MessageContent>
                        </Message>
                      );
                    default:
                      return null;
                  }
                })
              )}
            </ConversationContent>
          )}
          <ConversationScrollButton />
        </Conversation>
        <PromptInput
          onSubmit={(message) => {
            sendMessage(message);
            setInput("");
          }}
        >
          <PromptInputBody>
            <PromptInputTextarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
          </PromptInputBody>
          <PromptInputFooter className="flex justify-end">
            <PromptInputSubmit />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </>
  );
}
