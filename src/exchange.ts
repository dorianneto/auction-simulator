import type { AuctionResult, Impression, DSP } from './types.js';

async function runAuction(
  impression: Impression,
  dsps: DSP[],
): Promise<AuctionResult> {}

async function simulateAuctions(
  impressions: Impression[],
  dsps: DSP[],
): Promise<AuctionResult[]> {}
