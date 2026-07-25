import type { AuctionResult, Impression, DSP } from './types.js';

async function runAuction(
  impression: Impression,
  dsps: DSP[],
): Promise<AuctionResult> {
  // 1. Request bids from all DSPs in parallel
  // 2. Filter valid bids (must meet floor price)
  // 3. Sort by price descending
  // 4. Run second-price: winner pays 2nd highest
  // 5. Return result
}

export async function simulateAuctions(
  impressions: Impression[],
  dsps: DSP[],
): Promise<AuctionResult[]> {
  // Loop through all impressions, run auction for each
  // Collect results
  // Return all results
}
