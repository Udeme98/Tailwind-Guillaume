export default function Grid() {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <div className="p-6 rounded-lg bg-sky-600">First Element</div>
          <div className="p-6 rounded-lg bg-sky-600">Second Element</div>
          <div className="p-6 rounded-lg bg-sky-600">Third Element</div>
          {/* <div className="p-6 rounded-lg bg-sky-600 col-span-2">
            Fourth Element
          </div> */}
          <div className="p-6 rounded-lg bg-sky-600">Fifth Element</div>
          <div className="p-6 rounded-lg bg-sky-600">Sixth Element</div>
        </div>
      </div>
    </div>
  );
}
