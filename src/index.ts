import { AmazonDSP } from './dsp/amazon.js';
import { GoogleAdsDSP } from './dsp/googleAds.js';
import { MagniteDSP } from './dsp/magnite.js';
import { ProgrammaticDirectDSP } from './dsp/programmaticDirect.js';
import { TradesDeskDSP } from './dsp/tradesDesk.js';
import { simulateAuctions } from './exchange.js';
import { mockImpressions } from './impressions.js';
import { DSP } from './types.js';

const mockDsps: DSP[] = [
  new GoogleAdsDSP(),
  new TradesDeskDSP(),
  new AmazonDSP(),
  new MagniteDSP(),
  new ProgrammaticDirectDSP(),
];

simulateAuctions(mockImpressions, mockDsps)
  .then((r) => {
    console.log('Auction Results:');
    console.log(r);
  })
  .catch((e) => {
    console.error(e);
  });
