const Question = ({
  index,
  handleDelete,
  handleChange,
  state,
  handleAddOption,
  handleOptionChange,
  handleOptionsDelete,
}) => {
  return (
    <div className="card mt-2" style={{ width: "100%" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h5 className="card-title">Configure Field</h5>
          </div>
          <div className="col-md-6 text-end">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Field Name"
              name="name"
              required
              value={state.name || ""}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="col-md-6">
            <select
              name="type"
              className="form-control"
              onChange={(e) => handleChange(e, index)}
              value={state.type || "default"}
              required
            >
              <option disabled value="default">
                Select type of field
              </option>
              <option value="text">Text Field</option>
              <option value="radio"> Radio Buttons</option>
              <option value="date">Date</option>
            </select>
          </div>

          {state.type === "radio" && (
            <div className="col-md-12">
              {state.options.map((option, index2) => {
                return (
                  <div className="row" key={index2}>
                    <div className="form-check mt-3 col-md-6">
                      <input
                        className="form-check-input mt-2"
                        type="radio"
                        name="radio"
                        disabled
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Option"
                        name={state.name}
                        required
                        value={option.value || ""}
                        onChange={(e) => handleOptionChange(e, index, index2)}
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleOptionsDelete(index, index2)}
                      >
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                );
              })}

              <button
                className="btn btn-info mt-4"
                onClick={() => handleAddOption(index)}
              >
                <i className="fa fa-plus"></i> Add Option
              </button>
            </div>
          )}
        </div>
        <hr />
        <div className="col-md-12 mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              name="required"
              onChange={(e) => handleChange(e, index)}
              checked={state.required || false}
              required
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Required
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
