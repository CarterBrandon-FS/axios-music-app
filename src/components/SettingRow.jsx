function SettingRow({ label, description, children }) {
  return (
    <div className="setting-row">
      <div className="setting-row-text">
        <span className="setting-row-label">{label}</span>
        {description && (
          <span className="setting-row-description">{description}</span>
        )}
      </div>
      <div className="setting-row-control">{children}</div>
    </div>
  );
}

export default SettingRow;
