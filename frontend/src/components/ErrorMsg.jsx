function ErrorMsg({ error }) {
  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <h2 className="centered-header"></h2>
    </div>
  );
}
export default ErrorMsg;
