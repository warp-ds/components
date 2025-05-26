import { createComponent } from '@lit/react';
import React from 'react';
import { WIcon as WarpIconWC } from '../../src/icon/index.ts';

export const WIcon = createComponent({
  tagName: 'w-icon',
  elementClass: WarpIconWC,
  react: React,
});
