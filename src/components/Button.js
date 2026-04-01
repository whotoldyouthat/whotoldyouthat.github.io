function Button({ label, onClick, isActive = false, className = "" }) {
  return (
    <button
      className={`button cursorTarget ${className} ${isActive ? "active" : ""}`.trim()}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
