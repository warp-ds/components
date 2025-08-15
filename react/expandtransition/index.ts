import { createComponent } from '@lit/react';
import React from 'react';
import { WExpandTransition as WExpandTransitionWC } from '../../src/expandtransition/index.ts';

export const WExpandTransition = createComponent({
  tagName: 'w-expandtransition',
  elementClass: WExpandTransitionWC,
  react: React,
});
