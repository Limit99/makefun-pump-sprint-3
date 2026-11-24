// Paper bot for the Pump.fun Bot Sprint: Make Bot And Win (agent-fun/replay/v2).
// The grader runs `node /bot/main.ts`: a hello first, then one batch per slot,
// and this process answers every batch with its orders. All trading decisions
// live in strategy.ts; the protocol shim is vendored in vendor/makefun-bot.ts.

import { runBot } from "./vendor/makefun-bot.ts";
import { createStrategy, DEFAULT_PARAMS } from "./strategy.ts";

// The entrypoint stays a thin shell on purpose: every trading decision lives
// in strategy.ts, so the whole strategy is one readable, testable unit. The
// sprint window here is 6 hours, so the strategy's probes are paced to finish
// inside five hours and the 20-coin guardrail is reachable in time.
const bot = createStrategy(DEFAULT_PARAMS);
await runBot(bot);
