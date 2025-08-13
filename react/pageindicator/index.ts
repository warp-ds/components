import { createComponent } from '@lit/react';
import React from 'react';
import { WPageIndicator as WPageIndicatorWC } from '../../src/pageindicator/index.ts';

export const WPageIndicator = createComponent({
  tagName: 'w-pageindicator',
  elementClass: WPageIndicatorWC,
  react: React,
});
