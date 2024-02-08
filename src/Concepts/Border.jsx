export default function Border() {
  return (
    <>
      <div className="bg-slate-900 text-white h-screen ">
        {/* <h3 className="border-b-2 border-t-4">Borders</h3> */}
        <input
          type="text"
          className="border-red-600 border-2 border-dotted bg-slate-200 outline-none text-red-500"
        />

        {/* border color, style,etc */}
        {/* Divide */}

        {/* Ring - utilities for creating rings with box-shadows */}
        <button className="ring-offet-2 ring-2">Button 1</button>

        <button className="ring-offet-2 ring-4">Button 1</button>
      </div>
    </>
  );
}
