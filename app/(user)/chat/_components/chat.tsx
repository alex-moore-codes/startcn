"use client";
import { StartCNAgentUIMessage } from "@/ai/agents/startcn-agent.agent";
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
import { Shimmer } from "@/components/ai-elements/shimmer";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Brain, MessageCircleIcon } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat<StartCNAgentUIMessage>({
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
                    case "tool-startCNTool":
                      switch (part.state) {
                        case "approval-requested":
                          return null;
                        case "approval-responded":
                          return null;
                        case "input-available":
                          return null;
                        case "input-streaming":
                          return null;
                        case "output-available":
                          return null;
                        case "output-error":
                          return null;
                        case "output-denied":
                          return null;
                      }
                    default:
                      return null;
                  }
                })
              )}
              {status === "submitted" && (
                <div className="flex items-center gap-2">
                  <Brain className="size-4 text-muted-foreground" />
                  <Shimmer>Thinking...</Shimmer>
                </div>
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
