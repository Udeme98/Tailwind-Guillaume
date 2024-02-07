export default function Spacing() {
  return (
    <div className="parent">
      {/* <div>Header</div> */}
      {/* display: flex */}
      {/* <div className="flex"> */}
      {/* flex-grow */}
      {/* <div className="grow">Main Content</div> */}
      {/* flex direction */}
      {/* <div className="flex flex-col">
          <div>Sidebar</div>
          <div>Menu</div>
        </div>
      </div> */}

      <div>Header</div>
      {/* display: flex */}
      <div className="flex flex-col md:flex-row">
        {/* flex-basis */}
        {/* <div className="basis-3/12 bg-red-500">Sidebar</div>
        <div className="basis-6/12 bg-red-700">Main Content</div>
        <div className="basis-3/12 bg-red-300">Sidebar</div> */}

        <div className=" bg-sky-300 md:w-[64px]">Sidebar</div>
        <div className=" bg-red-700 w-full">Main Content</div>
      </div>

      {/* flex wrap */}

      {/* justify content */}
      <div className="flex mt-3 mx-4 justify-evenly">
        <div className="bg-red-300 w-6 h-6"></div>
        <div className="bg-red-300 w-6 h-6"></div>
        <div className="bg-red-300 w-6 h-6"></div>
      </div>

      {/* align items */}
      <div className="mt-3 w-full h-[400px] bg-purple-700 flex justify-center items-center space-x-1">
        <div className="bg-green-600 w-6 h-6">01</div>
        <div className="bg-green-600 w-6 h-6">02</div>
        <div className="bg-green-600 w-6 h-6">03</div>
      </div>
    </div>
  );
}
