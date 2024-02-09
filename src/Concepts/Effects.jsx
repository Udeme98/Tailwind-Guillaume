export default function Effect() {
  return (
    <div className="h-screen p-4">
      {/* shadow effect */}
      <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md hover:brightness-75">
        <h2 className="text-2xl">Effects</h2>
        <p className="mb-4">This is my div</p>
        <button className="px-3 py-2 text-white rounded-lg cursor-pointer bg-cyan-500 shadow-sm shadow-cyan-500/50 active:shadow-none">
          Say hello
        </button>
      </div>

      {/* Opacity */}
      {/* filters - blur, brightness */}
    </div>
  );
}
