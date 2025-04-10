import React, { useRef, useState } from 'react';

import { Dropdown, useOutsideClick } from './index.ts';
import { Button } from '@warp-ds/react/components/button';
import { TextField } from '@warp-ds/react/components/textfield';
import IconChevronDown16 from '@warp-ds/icons/react/chevron-down-16';

const metadata = { title: 'Forms/Dropdown' };
export default metadata;

export function DropdownButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  const className = 'text-left';

  useOutsideClick([buttonRef, popoverRef], () => setMenuOpen(false));

  return (
    <Dropdown
      popoverRef={popoverRef}
      open={menuOpen}
      trigger={
        <Button utility small ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)}>
          Trigger
        </Button>
      }
    ><div style={{ width: "150px" }}>
      <Button style={{ minWidth: '100%' }} utility quiet small className={className}>
        Økonomi
      </Button>
      <Button style={{ minWidth: '100%' }} utility quiet small className={className}>
        Økonomi pluss
      </Button>
      <Button style={{ minWidth: '100%' }} utility quiet small className={className}>
        Business
      </Button>
      <Button style={{ minWidth: '100%' }} utility quiet small className={className}>
        Første klasse
      </Button>
      <Button style={{ minWidth: '100%' }} utility quiet small className={className}>
        Alle klasser
      </Button>
      </div>
    </Dropdown>
  );
}

export function DropdownInput() {
    const [menuOpen, setMenuOpen] = useState(false);
    const buttonRef = useRef(null);
    const popoverRef = useRef(null);
    const className = 'text-left';
  
    useOutsideClick([buttonRef, popoverRef], () => setMenuOpen(false));
  
    return (
      <Dropdown
        popoverRef={popoverRef}
        open={menuOpen}
        trigger={
          <TextField label="Country" value="Norway" ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)} >
            <button suffix="true" className="w-prefix" onClick={() => setMenuOpen(!menuOpen)}><IconChevronDown16 /></button>
          </TextField>
        }
      >
        <Button style={{ minWidth: '100%' }} utility quiet className={className}>
          hi
        </Button>
        <Button style={{ minWidth: '100%' }} utility quiet className={className}>
          hello
        </Button>
        <Button style={{ minWidth: '100%' }} utility quiet className={className}>
          how are you?
        </Button>
      </Dropdown>
    );
  }


export function DropdownWithSelect() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);

  // A simple utility to ensure that the count doesn't go below zero
  const decrement = (count, setCount) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  useOutsideClick([buttonRef, popoverRef], () => setMenuOpen(false));

  return (
    <Dropdown
      popoverRef={popoverRef}
      open={menuOpen}
      trigger={
        <Button utility small ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)}>
          1 reisende
        </Button>
      }
    >
      <div style={{ width: "250px", padding: "16px" }}>
      {/* Voksne */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>Voksne</div>
          <div style={{ fontSize: "12px", color: "#666" }}>12 år og over</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "32px",
              height: "32px",
              fontSize: "18px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => decrement(adults, setAdults)}
          >
            –
          </button>
          <span
            style={{
              margin: "0 8px",
              fontSize: "16px",
              minWidth: "16px",
              textAlign: "center",
            }}
          >
            {adults}
          </span>
          <button
            style={{
              width: "32px",
              height: "32px",
              fontSize: "18px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setAdults(adults + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Barn */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>Barn</div>
          <div style={{ fontSize: "12px", color: "#666" }}>1–11 år</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "32px",
              height: "32px",
              fontSize: "18px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => decrement(children, setChildren)}
          >
            –
          </button>
          <span
            style={{
              margin: "0 8px",
              fontSize: "16px",
              minWidth: "16px",
              textAlign: "center",
            }}
          >
            {children}
          </span>
          <button
            style={{
              width: "32px",
              height: "32px",
              fontSize: "18px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setChildren(children + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Spedbarn */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>Spedbarn</div>
          <div style={{ fontSize: "12px", color: "#666" }}>0–1 år</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "32px",
              height: "32px",
              fontSize: "18px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => decrement(infants, setInfants)}
          >
            –
          </button>
          <span
            style={{
              margin: "0 8px",
              fontSize: "16px",
              minWidth: "16px",
              textAlign: "center",
            }}
          >
            {infants}
          </span>
          <button
            style={{
              width: "32px",
              height: "32px",
              fontSize: "18px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setInfants(infants + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
    </Dropdown>
  );
}