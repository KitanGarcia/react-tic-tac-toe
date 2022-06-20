function Cell({ value, handleClick }) {
  return (
    <div className="Cell" onClick={handleClick}>
      {value}
    </div>
  );
}

export default Cell;
