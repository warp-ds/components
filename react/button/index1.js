import { createComponent } from '@lit/react';
import React from 'react';
import { WarpButton as WarpButtonWC } from '../../src/button/index.js';

export const WarpButton = createComponent({
  tagName: 'w-button',
  elementClass: WarpButtonWC,
  react: React,
  events: {
    onClick: 'click',
  },
});
