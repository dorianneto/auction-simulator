export interface Impression {
  id: string;
  publisherId: string;
  slotSize: "300x250" | "728x90" | "160x600";
  userSegment: "tech" | "sports" | "general" | "finance";
  location: string;
  floorPrice: number; // Minimum CPM
}

interface DSPBidResponse {
  price: number; // CPM
  dspId: string;
}

export interface DSP {
  id: string;
  name: string;
  budget: number;
  spent: number;
  winCount: number; // Impressions won
  getBid(impression: Impression): Promise<DSPBidResponse | null>;
}

export interface Bid {
  dspId: string;
  price: number; // CPM
  impression: Impression;
}

export interface AuctionResult {
  impression: Impression;
  winnerDspId: string | null;
  winningBid: number; // Second-price
  timestamp: number;
}
