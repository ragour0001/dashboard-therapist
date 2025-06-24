"use client";

interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  name?: string;
}

export default function RadioButton({
  value,
  checked,
  onChange,
  name,
}: RadioButtonProps) {
  return (
    <div className="radio-button-container" onClick={() => onChange(value)}>
      <input
        type="radio"
        checked={checked}
        value={value}
        name={name}
        onChange={() => onChange(value)}
        className="radio-native"
        style={{ position: 'absolute', opacity: 10, width: 20, height: 20 }}
        tabIndex={-1}
        aria-checked={checked}
      />
      <div className="radio-button-wrapper">
        <div className="radio-state-layer">
          <div className="radio-icon">
            {checked ? (
              <div className="radio-inner-circle" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
