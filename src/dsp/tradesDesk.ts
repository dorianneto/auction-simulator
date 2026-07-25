import { DSP, DSPBidResponse, Impression } from '../types.js';

export class TradesDeskDSP implements DSP {
  id = 'ttd';
  name = 'The Trade Desk';
  budget = 80;
  spent = 0;
  winCount = 0;

  async getBid(impression: Impression): Promise<DSPBidResponse | null> {
    const bidPerSegment: Record<string, number> = {
      tech: 1.5,
      sports: 1.0,
      general: 0.5,
      finance: 2.0,
    };

    if (!bidPerSegment[impression.userSegment]) {
      return null;
    }

    return {
      price: bidPerSegment[impression.userSegment] || 0,
      dspId: this.id,
    };
  }
}
