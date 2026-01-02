import MODEL from "@/constants/model.constant";
import { devToolsMiddleware } from "@ai-sdk/devtools";
import { gateway, wrapLanguageModel } from "ai";

const DEV_MODEL = wrapLanguageModel({
  model: gateway(MODEL),
  middleware: devToolsMiddleware(),
});

export default DEV_MODEL;
