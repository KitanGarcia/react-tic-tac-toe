import Cell from "./Cell";

function Board() {
  return (
    <div className="Board">
      <div className="row">
        <Cell value={""} />
        <Cell value={""} />
        <Cell value={""} />
      </div>
      <div className="row">
        <Cell value={""} />
        <Cell value={""} />
        <Cell value={""} />
      </div>
      <div className="row">
        <Cell value={""} />
        <Cell value={""} />
        <Cell value={""} />
      </div>
    </div>
  );
}

export default Board;
