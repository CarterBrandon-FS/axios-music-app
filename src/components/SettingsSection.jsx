function SettingsSection({ title, children }) {
  return (
    <section className="settings-section">
      <h2 className="settings-section-title">{title}</h2>
      <div className="settings-section-body">{children}</div>
    </section>
  );
}
export default SettingsSection;
