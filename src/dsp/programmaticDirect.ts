import type { DSP, Impression, DSPBidResponse } from '../types.js';

export class ProgrammaticDirectDSP implements DSP {
  id = 'prog-direct';
  name = 'Programmatic Direct';
  budget = 50;
  spent = 0;
  winCount = 0;

  async getBid(impression: Impression): Promise<DSPBidResponse | null> {
    if (
      impression.location !== 'New York' &&
      impression.location !== 'San Francisco'
    ) {
      return null; // Only bid in major markets
    }

    if (impression.userSegment === 'general') {
      return { price: 0.6, dspId: this.id };
    }

    return null;
  }
}
