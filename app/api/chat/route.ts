import StartCNAgent from "@/ai/agents/startcn-agent.agent";
import { createAgentUIStreamResponse } from "ai";

export async function POST(request: Request) {
  const { messages } = await request.json();

  return createAgentUIStreamResponse({
    agent: StartCNAgent,
    uiMessages: messages,
  });
}
