import { createComponent } from '@lit/react';
import React from 'react';
import { WAlert as WAlertWC } from '../../src/alert/index.ts';

export const WAlert = createComponent({
  tagName: 'w-alert',
  elementClass: WAlertWC,
  react: React,
});
