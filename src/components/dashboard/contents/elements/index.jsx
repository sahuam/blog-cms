export const HeaderElement = ({ setData }) => {
  const [inputs, setInputs] = useState({
    type: "Header",
    data: {
      text: "Header Text",
      headerType: "h1",
      textColor: "black",
      textAlign: "left",
    },
  });

  return (
    <div>
      {/* Header Type */}
      <div>
        <label>Header Type</label>
        <select defaultValue={"h1"}>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
          <option value="h5">H5</option>
          <option value="h6">H6</option>
        </select>
      </div>
      {/* Text */}{" "}
      <div>
        <label>Header Text</label>
        <input placeholder="Enter a Header" />
      </div>
      {/* Alignment */}{" "}
      <div>
        <label>Alignment</label>
        <input type="radio" name="alignment" value="left" />
        <input type="radio" name="alignment" value="center" />
        <input type="radio" name="alignment" value="right" />
      </div>
      {/* color */}
      <div>
        <label>Header Color</label>
        <input type="color" />
      </div>
      <button onClick={() => setData(inputs)}>Add</button>
    </div>
  );
};

export const ParagraphElement = () => {
  return (
    <div>
      {/* Text */}{" "}
      <div>
        <label>Paragraph</label>
        <input placeholder="Enter a description" />
      </div>
      {/* Alignment */}
      <div>
        <label>Alignment</label>
        <input type="radio" name="alignment" value="left" />
        <input type="radio" name="alignment" value="center" />
        <input type="radio" name="alignment" value="right" />
      </div>
    </div>
  );
};
