export default function Layout() {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      {/* container, columns */}
      <div className="container px-2">
        {/* positions */}
        <div className="relative bg-red-500 h-[200px] w-[200px] rounded-md">
          <div className="bg-green-300 inset-2 h-[100px] w-[100px] rounded-md absolute"></div>
        </div>
        {/* Display - Flex, inline, block, none, inline-grid, etc */}
        {/* Position - Absolute, Relative, Static, Fixed, etc */}
        {/* Overflow - Overflow, overflow-x-auto, overflow-y-auto, etc */}
        {/* Visibility, etc */}
        {/* Z-index */}
        <div className="container flex">
          <div className="bg-red-300 z-40 p-3 border rounded-full border-white">
            z-40
          </div>
          <div className="bg-red-300 z-30 p-3 border rounded-full border-white">
            z-30
          </div>
          <div className="bg-red-300 z-20 p-3 border rounded-full border-white">
            z-20
          </div>
          <div className="bg-red-300 z-10 p-3 border rounded-full border-white">
            z-10
          </div>
          <div className="bg-red-300 z-0 p-3 border rounded-full border-white">
            z-0
          </div>
        </div>
      </div>
      {/* object position */}
      {/* box-sizing - box-border(border-box) */}
    </div>
  );
}
