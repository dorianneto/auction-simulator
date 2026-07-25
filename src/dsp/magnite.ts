import { DSP, DSPBidResponse, Impression } from '../types.js';

export class MagniteDSP implements DSP {
  id = 'magnite';
  name = 'Magnite';
  budget = 60;
  spent = 0;
  winCount = 0;

  async getBid(impression: Impression): Promise<DSPBidResponse | null> {
    if (impression.userSegment === 'tech') {
      return null; // Skip tech (too expensive, have other clients)
    }

    if (impression.userSegment === 'finance') {
      return { price: 1.8, dspId: this.id };
    }

    if (
      impression.userSegment === 'general' ||
      impression.userSegment === 'sports'
    ) {
      return { price: 0.9, dspId: this.id };
    }

    return null;
  }
}
