# StartCN - Next.js AI Starter Template

A production-ready Next.js starter template featuring AI SDK v6, shadcn/ui, AI Elements, Workflow Dev Kit, and everything you need to build modern AI-powered applications.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![AI SDK](https://img.shields.io/badge/AI%20SDK-v6-orange)](https://sdk.vercel.ai/)
[![pnpm](https://img.shields.io/badge/pnpm-9.0+-yellow)](https://pnpm.io/)

## ✨ Features

- 🚀 **Next.js 16** with App Router and React 19
- 🤖 **AI SDK v6** with Vercel AI Gateway integration
- 🛠️ **AI SDK DevTools** - Pre-configured and ready to use
- 🎨 **shadcn/ui** - Beautiful, accessible component library
- 🧩 **AI Elements** - Pre-built AI components (conversations, prompts, reasoning, etc.)
- ⚡ **Workflow Dev Kit** - Build complex AI workflows with ease
- 📦 **Streamdown** - Pre-configured for AI streaming components
- 🎯 **TypeScript** - Fully typed with strict mode enabled
- 🎨 **Tailwind CSS v4** - Modern styling with CSS variables
- 🌙 **Dark Mode** - Built-in theme support with Next Themes, <ThemeProvider />, and <ThemeSwitcher />
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **pnpm** - Fast, efficient package management

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/alex-moore-codes/startcn.git
cd startcn

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local
```

**Important:** Add your `AI_GATEWAY_API_KEY` to `.env.local`:

```bash
AI_GATEWAY_API_KEY=your_gateway_api_key_here
```

Then start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app. Check out the example chat at [http://localhost:3000/chat](http://localhost:3000/chat).

### Using AI DevTools

In a separate terminal, launch the AI SDK DevTools:

```bash
pnpm ai
```

This opens the DevTools interface where you can monitor AI calls, inspect prompts, view responses, and debug your AI workflows in real-time.

## 🎯 Key Features Explained

### AI SDK v6 with DevTools

This starter comes with AI SDK v6 fully configured and ready to use. The DevTools are pre-configured and can be launched with a simple command:

```bash
pnpm ai
```

The AI model is configured in `constants/model.constant.ts` using Vercel AI Gateway. The DevTools middleware is automatically applied to the development model in `ai/dev-model.ts`.

### shadcn/ui Components

All shadcn/ui components are pre-installed and configured. The project uses the `radix-maia` style with a neutral base color. Components are located in `components/ui/` and can be customized as needed.

### AI Elements

Pre-built AI components are available in `components/ai-elements/`. See the example chat implementation at `/chat` for usage. Key components include:

- `conversation` - Complete chat interface
- `message` - Message display with rich formatting
- `prompt-input` - Advanced input with attachments
- `reasoning`, `chain-of-thought` - Reasoning visualization
- `tool` - Tool call visualization
- `artifact`, `canvas`, `image` - Visual components
- And 20+ more components for building AI UIs

### Workflow Dev Kit

The Workflow Dev Kit is integrated via `next.config.ts` using the `withWorkflow` wrapper. This enables you to build complex AI workflows with visual debugging and monitoring.

### Streamdown Integration

Streamdown is pre-configured for seamless AI streaming. The source files are automatically included via the `@source` directive in `globals.css`, so you don't need to manually configure anything.

### Example Chat Implementation

A working chat interface is included at `/chat` demonstrating:

- Agent-based AI interactions using `ToolLoopAgent`
- Tool integration with Zod validation
- AI Elements components (`Conversation`, `Message`, `PromptInput`)
- Streaming responses with `createAgentUIStreamResponse`

The example includes a simple agent (`StartCNAgent`) and tool (`startCNTool`) that you can modify or use as a template for your own implementations.

## 📁 Project Structure

```
startcn/
├── ai/                          # AI SDK configuration
│   ├── agents/                  # AI agents
│   │   └── startcn-agent.agent.ts
│   ├── tools/                   # AI tools
│   │   └── startcn-tool.tool.ts
│   └── dev-model.ts            # Development model with DevTools
├── app/                         # Next.js app directory
│   ├── (user)/                  # Route groups
│   │   └── chat/               # Chat page with example implementation
│   │       ├── _components/    # Page-specific components
│   │       └── page.tsx
│   ├── api/                    # API routes
│   │   └── chat/               # Chat API endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with ThemeProvider
│   └── page.tsx                # Home page
├── components/
│   ├── ai-elements/            # AI-specific components
│   ├── ui/                     # shadcn/ui components
│   ├── theme-provider.tsx      # Theme provider wrapper
│   └── theme-switcher.tsx     # Theme switcher component
├── constants/
│   └── model.constant.ts       # AI model configuration
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
└── package.json               # Dependencies and scripts
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm ai` - Launch AI SDK DevTools

## ⚙️ Configuration

### AI Model

Configure your AI model in `constants/model.constant.ts`:

```typescript
import { GatewayModelId } from "ai";

const MODEL = "xai/grok-4.1-fast-non-reasoning" as GatewayModelId;

export default MODEL;
```

The model uses Vercel AI Gateway, which supports multiple providers. Change the model ID to use different providers (OpenAI, Anthropic, Google, etc.).

### Environment Variables

**Required:** Create a `.env.local` file in the root directory and add your Vercel AI Gateway API key:

```bash
AI_GATEWAY_API_KEY=your_gateway_api_key_here
```

You can get your API key from the [Vercel AI Gateway dashboard](https://vercel.com/dashboard).

### shadcn/ui

Components are configured via `components.json`. To add new components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

### TypeScript Paths

Path aliases are configured in `tsconfig.json`:

- `@/*` → Root directory

## 🎨 Styling

The project uses Tailwind CSS v4 with CSS variables for theming. Color schemes are defined in `app/globals.css` with support for light and dark modes.

### Customization

- Colors: Modify CSS variables in `:root` and `.dark` selectors
- Fonts: Configured in `app/layout.tsx` (Geist Sans, Geist Mono, Figtree)
- Border radius: Customizable via CSS variables (`--radius-*`)

## 🔧 Development Tips

- **AI DevTools**: Run `pnpm ai` in a separate terminal to monitor AI calls
- **Agents & Tools**: Create agents in `ai/agents/` and tools in `ai/tools/`
- **Component Organization**: Generic components in `components/`, page-specific ones in `components/_components/`
- **Validation**: Use Zod schemas with `Schema` suffix (e.g., `UserSchema`)
- **Data Fetching**: Use React Server Components or Server Actions, avoid `useEffect`

## 📝 Coding Standards

This project follows specific coding conventions:

- **File Naming**: Use `kebab-case` for all file names (e.g., `user-profile.tsx`)
- **Functions**: Prefer `function` declarations over `const` arrow functions for named functions
- **Arrays**: Use `Array<T>` syntax instead of `T[]` for type annotations
- **React**: Use idiomatic React patterns and best practices
- **Components**: Place reusable components in `components/`, UI-specific ones in `components/_components/`
- **Validation**: Always use Zod with `Schema` suffix for schema names
- **Package Manager**: Always use `pnpm` (never npm or yarn)
- **TypeScript**: No implicit or explicit `any` types - strict mode enforced

## 📦 Dependencies

### Core

- `next` - Next.js framework
- `react` & `react-dom` - React 19
- `typescript` - TypeScript support

### AI & Workflows

- `ai` - Vercel AI SDK v6
- `@ai-sdk/devtools` - AI SDK DevTools
- `@ai-sdk/react` - React hooks for AI SDK
- `workflow` - Workflow Dev Kit
- `streamdown` - AI streaming components

### UI & Styling

- `shadcn` - shadcn/ui component system
- `tailwindcss` - Tailwind CSS v4
- `@radix-ui/*` - Radix UI primitives
- `lucide-react` - Icon library
- `motion` - Animation library
- `next-themes` - Theme management

### Utilities

- `zod` - Schema validation
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Class name utilities

## 🚨 Important Notes

### Required Setup

**Before running the app**, make sure you've created `.env.local` with your API key:

```bash
AI_GATEWAY_API_KEY=your_gateway_api_key_here
```

Get your API key from the [Vercel AI Gateway dashboard](https://vercel.com/dashboard).

### Pre-configured Setup

Important configurations already complete:

- ✅ **Streamdown Source**: Added to `app/globals.css` (`@source "../node_modules/streamdown/dist/*.js"`)
- ✅ **AI SDK DevTools**: Configured in `ai/dev-model.ts` with middleware
- ✅ **Workflow Integration**: Wrapped in `next.config.ts` with `withWorkflow`
- ✅ **Theme Provider**: Integrated in `app/layout.tsx` with `ThemeProvider`
- ✅ **TypeScript Strict Mode**: Enabled with no implicit or explicit `any` types
- ✅ **Path Aliases**: Configured for clean imports (`@/` prefix)
- ✅ **DevTools Command**: `pnpm ai` script ready to launch DevTools

## 🎯 Usage Examples

### Creating an Agent

```typescript
// ai/agents/my-agent.agent.ts
import { ToolLoopAgent } from "ai";
import DEV_MODEL from "../dev-model";
import myTool from "../tools/my-tool.tool";

export default new ToolLoopAgent({
  model: DEV_MODEL,
  instructions: "You are a helpful assistant.",
  tools: { myTool },
});
```

### Creating a Tool

```typescript
// ai/tools/my-tool.tool.ts
import { tool } from "ai";
import { z } from "zod";

export default tool({
  description: "A tool that does something useful",
  inputSchema: z.object({
    query: z.string().describe("The search query"),
  }),
  execute: async ({ query }) => {
    return { result: `Searching for: ${query}` };
  },
});
```

### API Route with Agent

```typescript
// app/api/chat/route.ts
import MyAgent from "@/ai/agents/my-agent.agent";
import { createAgentUIStreamResponse } from "ai";

export async function POST(request: Request) {
  const { messages } = await request.json();
  return createAgentUIStreamResponse({
    agent: MyAgent,
    uiMessages: messages,
  });
}
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [AI SDK DevTools](https://sdk.vercel.ai/docs/devtools)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Workflow Dev Kit](https://github.com/vercel/workflow)
- [Streamdown Documentation](https://github.com/vercel/streamdown)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
