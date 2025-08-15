import style from 'inline:./style.css';
import { i18n } from '@lingui/core';
import React, { useId, useRef } from 'react';
import { HelpText } from './HelpText.tsx';
import { TextAreaProps } from './props.ts';
import useTextAreaHeight from './useTextAreaHeight.ts';
import { activateI18n } from '../../i18n.ts';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

export function TextArea(props: TextAreaProps) {
  const {
    ref: propRef,
    className = '',
    disabled = false,
    helpText,
    invalid = false,
    label,
    maximumRows,
    minimumRows,
    readOnly = false,
    style: customStyle,
    value,
    optional = false,
    placeholder,
    ...rest
  } = props;

  const id = useId();
  const internalRef = useRef<HTMLTextAreaElement>(null);
  const refObject = (propRef && 'current' in propRef) ? propRef as React.RefObject<HTMLTextAreaElement> : internalRef;
  const helpId = helpText ? `${id}__hint` : undefined;
  const isInvalid = invalid;

  useTextAreaHeight({
    ref: refObject,
    value,
    maximumRows,
    minimumRows,
  });

  const wrapperClasses = [
    'w-textarea',
    disabled && 'w-textarea--disabled',
    isInvalid && 'w-textarea--invalid',
    readOnly && 'w-textarea--readonly',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <>
      <style href="TextArea" precedence="medium">
        {style}
      </style>
      <div className={wrapperClasses} style={customStyle}>
        {label && (
          <label htmlFor={id} className='w-textarea__label'>
            {label}
            {optional && (
              <span className='w-textarea__label--optional'>
                {i18n._({
                  id: 'textarea.label.optional',
                  message: '(optional)',
                  comment: 'Shown behind label when marked as optional',
                })}
              </span>
            )}
          </label>
        )}
        <textarea
          id={id}
          ref={refObject}
          className="w-textarea__field"
          placeholder={placeholder}
          aria-describedby={helpId}
          aria-errormessage={isInvalid && helpId ? helpId : undefined}
          aria-invalid={isInvalid}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          {...rest}
        />
        {helpText && <HelpText helpId={helpId} helpText={helpText} isInvalid={isInvalid} />}
      </div>
    </>
  );
}
