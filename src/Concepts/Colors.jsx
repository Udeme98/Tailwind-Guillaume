export default function Colors() {
  return (
    <div>
      {/* Colors */}
      <h1 className="text-green-500 bg-slate-200 mb-1">Hello World</h1>
      <h1 className="text-red-500">Hello Tailwind</h1>

      {/* Custom colors */}
      <h3 className="text-vuejs">Udeme</h3>

      {/*Adding a border */}
      <p className="border-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maxime,
        quo alias reprehenderit possimus pariatur consequuntur expedita atque,
        nisi soluta dolorem dicta? Harum delectus recusandae soluta possimus
        perferendis eos ipsam.
      </p>

      {/* Using Arbitrary values */}
      <p className="text-[#f223f2] m-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam
        nobis nihil temporibus fuga harum autem architecto possimus odio eaque,
        a ipsa ut inventore, dolor fugit modi praesentium tempora perspiciatis.
      </p>
    </div>
  );
}
