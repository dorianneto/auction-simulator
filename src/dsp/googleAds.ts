import type { DSP, Impression, DSPBidResponse } from '../types.js';

export class GoogleAdsDSP implements DSP {
  id = 'google-ads';
  name = 'Google Ads';
  budget = 100;
  spent = 0;
  winCount = 0;

  async getBid(impression: Impression): Promise<DSPBidResponse | null> {
    if (impression.userSegment === 'tech') {
      return { price: 3.5, dspId: this.id };
    }

    if (impression.userSegment === 'finance') {
      return { price: 1.8, dspId: this.id };
    }

    if (impression.userSegment === 'general') {
      return { price: 0.8, dspId: this.id };
    }

    return null;
  }
}
