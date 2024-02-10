export default function Design() {
  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p>This is a paragraph</p>
      <a href="#">This is an anchor</a>

      {/* styling buttons */}
      <div className="my-4">
        <button className="btn btn-primary">This is a primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">
          This is a secondary Button
        </button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-primary">
          This is a primary button
        </button>
      </div>

      {/* stying input elements */}
      <div>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <input disabled type="text" placeholder="Disabled" />
      </div>
      <div>
        <input type="date" placeholder="Disabled" />
      </div>

      {/* checkbox */}
      <div className="flex items-start">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta magni
          doloremque quisquam doloribus repudiandae libero perferendis vel ea
          maxime quidem eum, rem iusto eaque eius ipsum commodi neque ratione
          alias!
        </label>
      </div>
      <div>
        <select name="option" id="option">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    </div>
  );
}
