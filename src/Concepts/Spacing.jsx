export default function Spacing() {
  return (
    <div>
      {/* padding */}
      <h3 className="bg-red-500 text-white font-bold p-4">Padding</h3>

      {/* margin */}
      <h3 className="bg-red-500 text-white font-bold m-4">Margin</h3>

      {/* margin - using negative values */}
      <div className="h-18 bg-red-500 w-6">d</div>
      <div className="bg-red-300 -mt-2">-mt-8</div>

      {/*width and height*/}
      <div className="bg-green-800 h-5 w-6"></div>
      <div className="bg-red-800 h-4 w-6"></div>

      {/* Space between */}
      <div className="flex space-x-4 mt-1 ml-1">
        <div className="bg-green-200 p-2">01</div>
        <div className="bg-green-200 p-2">02</div>
        <div className="bg-green-200 p-2">03</div>
      </div>
    </div>
  );
}
