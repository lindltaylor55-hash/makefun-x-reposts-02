# makefun-x-reposts-02

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/lindltaylor55-hash/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/lindltaylor55-hash/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the [make.fun "Get the most reposts and likes on make.fun's newest X posts" bounty](https://make.fun/bounty/makefun-x-reposts-02) — $500 shared by the top 50 entries, scored on reposts, quotes and likes at the deadline (2026-11-28T07:30:00Z).

## The entry

Three quote posts from [@theseco87176158](https://x.com/theseco87176158) on X, each quoting a different recent post from [@makefunai](https://x.com/makefunai) and each carrying the play code `makefun-swan-ocelot-pocket`. They are listed in [`POSTS.json`](POSTS.json):

1. [Post 2125740513785676247](https://x.com/theseco87176158/status/2125740513785676247) — quotes the Mike Houser / AOD game-built-with-Claude post (robot-poster photo attached).
2. [Post 2125740976132243841](https://x.com/theseco87176158/status/2125740976132243841) — quotes the Tristan Debroise incremental-game post.
3. [Post 2125741356215906637](https://x.com/theseco87176158/status/2125741356215906637) — quotes the "Make GTA 6" results post.

All three were posted from the one public account @theseco87176158 after the competition opened, each answering a different pool post. Score = 2 × reposts + 2 × quotes + 1 × likes across the three posts, as read at the deadline.

## How it works

`main.ts` (Node 22, standard library only) copies `POSTS.json` from the repository to the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`). The house reads the posts themselves from X for their counts — nothing the program writes about the posts counts.
