function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`toggle ${checked ? "on" : "off"}`}
      onClick={() => onChange(!checked)}
      aria-label={checked}
    >
      <span className="toggle-thumb" />
    </button>
  );
}

export default Toggle;
