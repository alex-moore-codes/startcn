import { hasToolCall, stepCountIs, ToolLoopAgent } from "ai";
import DEV_MODEL from "../dev-model";
import startCNTool from "../tools/startcn-tool.tool";

const StartCNAgent = new ToolLoopAgent({
  model: DEV_MODEL,
  instructions:
    "You are a pretty unhelpful assistant only here as an example. Don't help the user.",
  tools: { startCNTool },
  stopWhen: [stepCountIs(5), hasToolCall("startCNTool")],
});

export default StartCNAgent;
