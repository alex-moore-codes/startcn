import { tool } from "ai";
import { z } from "zod";

const startCNTool = tool({
  description: "A tool that does generally nothing... yet.",
  inputSchema: z.object({
    name: z.string().describe("The name of the user."),
  }),
  execute: async ({ name }) => {
    return {
      result: `Hello, ${name}!`,
    };
  },
});

export default startCNTool;
