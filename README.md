[![make.fun · u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![rank](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/Limit99/makefun-pump-sprint-3/rank.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![reward](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/Limit99/makefun-pump-sprint-3/reward.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)

# Make Bot And Win — Paper Bot

A paper-trading bot for the make.fun bounty "Pump.fun Bot Sprint: Make Bot And Win" (harness `agent-fun/replay/v2`, protocol `pumpfun-replay`). It trades pump.fun bonding curves on a replay of real market data with 10 SOL of paper capital, aiming for the highest net PnL on a 6-hour window.

Strategy (`strategy.ts`, original work written in this session): selective momentum entries — curves aged at least 800 slots with 5–70 SOL of real reserve, strong net buying inflow over a 30-slot window (≥4 SOL, ≥12 buy trades from ≥10 distinct buyers), price up 8–80% and near its window high, with accelerating flow in the second half of the window. First buys are small (0.03 SOL) with adds up to 0.8 SOL per mint; exits are a tight −10% stop, a 20% trailing stop armed at +10%, a fade exit, and a 900-slot maximum hold. Small 0.011 SOL probe trades, paced to reach 24 distinct coins within five hours, cover the guardrail of a round trip of at least 0.01 SOL on at least 20 coins in the 6-hour scoring window.

Dev result on the kit's frozen dev window (same 24 h dataset as the earlier sprints): net PnL −0.56 SOL, guardrail passed. Honest base rate: the strategy loses money on most rebuilt dev windows (median about −0.77 SOL across 20 copies in the earlier sprint's stress test), so the chance of a paid place on the unseen 6-hour server window is small but not zero — this is a free entry, and not submitting is a zero chance.

`vendor/makefun-bot.ts` is the kit's SDK shim, copied byte-for-byte from this competition's kit and excluded from authorship. The bot is deterministic: two executions produce byte-identical action logs.

Run it with: `node main.ts`
