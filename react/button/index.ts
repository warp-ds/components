import { createComponent } from '@lit/react';
import React from 'react';
import { WButton as WButtonWC } from '../../src/button/index.ts';

export const WButton = createComponent({
  tagName: 'w-button',
  elementClass: WButtonWC,
  react: React,
});
