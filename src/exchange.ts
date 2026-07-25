import type { AuctionResult, Impression, DSP } from './types.js';

async function runAuction(
  impression: Impression,
  dsps: DSP[],
): Promise<AuctionResult> {
  const bids = dsps.map(async (dsp) => {
    return await dsp.getBid(impression);
  });

  const resolvedBids = await Promise.all(bids);

  const validBids = resolvedBids
    .filter((bid) => bid !== null)
    .filter((bid) => bid.price >= impression.floorPrice);

  const sortedBids = validBids.sort((a, b) => b.price - a.price);

  const winner = sortedBids[0];

  if (winner === undefined) {
    throw new Error('No valid bids received for impression: ' + impression.id);
  }

  const secondPrice = sortedBids[1]?.price

  if (secondPrice === undefined) {
    throw new Error('No valid bids received for impression: ' + impression.id);
  }

  return {
    impression,
    winnerDspId: winner.dspId,
    winningBid: secondPrice,
    timestamp: Date.now()
  }
}

export async function simulateAuctions(
  impressions: Impression[],
  dsps: DSP[],
): Promise<AuctionResult[]> {
  const results: AuctionResult[] = [];

  for (const impression of impressions) {
    results.push(await runAuction(impression, dsps));
  }

  return results;
}
