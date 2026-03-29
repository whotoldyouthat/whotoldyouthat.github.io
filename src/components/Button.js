function Button({ label, onClick, isActive = false, className = "" }) {
  return (
    <button
      className={`button ${className} ${isActive ? "active" : ""}`.trim()}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
