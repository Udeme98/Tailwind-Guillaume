export default function Anitrans() {
  return (
    <div className="p-4">
      <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md">
        <h2 className="text-2xl">Transition</h2>
        <p className="mb-4">This is my div</p>
        {/* transition and animation*/}
        <button className="px-3 py-2 text-white rounded-lg cursor-pointer bg-cyan-500 shadow-sm shadow-cyan-500/50 active:shadow-none -translate-y-1 transition ease-in-out delay animate hover:scale-105">
          Say hello
        </button>
      </div>
    </div>
  );
}
