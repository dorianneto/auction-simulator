import type { DSP, Impression, DSPBidResponse } from '../types.js';

class AmazonDSP implements DSP {
  id = 'amazon';
  name = 'Amazon DSP';
  budget = 70;
  spent = 0;
  winCount = 0;

  async getBid(impression: Impression): Promise<DSPBidResponse | null> {
    const bidPerSegment: Record<string, number> = {
      tech: 1.5,
      finance: 1.4,
      general: 1.2,
      sports: 1.1,
    };

    if (!bidPerSegment[impression.userSegment]) {
      return null;
    }

    return {
      price: bidPerSegment[impression.userSegment] || 0.8,
      dspId: this.id,
    };
  }
}
