import style from 'inline:./w-dropdown.css';

export const Dropdown = ({ children, trigger, open, popoverRef }) => {
  return (
    <div className="w-dropdown" ref={popoverRef}>
      <style href="w-dropdown" precedence="medium">
        {style}
      </style>
      {trigger}
      {/* Popover content */}
      {open && <div className="w-dropdown__popover">{children}</div>}
    </div>
  );
};
