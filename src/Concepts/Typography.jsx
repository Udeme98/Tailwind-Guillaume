export default function Typography() {
  return (
    <div>
      {/* text class sizes - text-xs, text-sm, text-lg */}
      <h1 className="text-3xl">Title 1</h1>
      <h1 className="text-2xl">Title 2</h1>
      <h1 className="text-xl">Title 3</h1>
      <p className="text-base">A regular papragraph</p>
      <p className="text-sm">A description papragraph</p>
      <p className="note text-xs">A little note</p>

      {/* font family */}
      <p className="font-serif">Font family</p>
      <p className="font-mono">Font family</p>

      {/* font style */}
      <p className="italic">Font Style Italics</p>
      <p className="not-italic">Font Style Not Italics</p>

      {/* text decoration */}
      <p className="underline decoration-red-500">Underline and red</p>
      <p className="line-through">Line-through</p>

      {/* line height, text-transform*/}
      <p className="leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        aperiam aspernatur odit quae. Libero hic commodi ipsam natus alias quas
        veniam labore? Nemo culpa ducimus mollitia rem facere iure maxime.
      </p>
      <p className="capitalize">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        aperiam aspernatur odit quae. Libero hic commodi ipsam natus alias quas
        veniam labore? Nemo culpa ducimus mollitia rem facere iure maxime.
      </p>

      {/* overflow */}
      <p className="truncate">
        This will truncate this my sentence to become truncated...,This will
        truncate this my sentence to become truncated...
      </p>
    </div>
  );
}
