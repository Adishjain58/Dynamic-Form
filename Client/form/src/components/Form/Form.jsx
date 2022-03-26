import { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/getFormConfig").then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <div
      className="container d-flex mt-5 justify-content-center flex-column align-items-center"
      style={{ width: "600px" }}
    >
      <div className="card mt-2" style={{ width: "100%" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h5 className="card-title">Form</h5>
            </div>
          </div>
          <form>
            {data &&
              data.map((field, index) => {
                return (
                  <div className="col-md-12" key={index}>
                    <label className="form-label mt-3">
                      {field.name}
                      {field.required && (
                        <span style={{ color: "red" }}> *</span>
                      )}
                    </label>
                    {field.type === "radio" ? (
                      field.options.map((option, index2) => {
                        return (
                          <div className="form-check" key={index2}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name={field.name}
                              value={option.value}
                              required={field.required}
                            />
                            <label className="form-check-label">
                              {option.value}
                            </label>
                          </div>
                        );
                      })
                    ) : (
                      <input
                        type={field.type}
                        className="form-control"
                        placeholder={field.name}
                        required={field.required}
                      />
                    )}
                  </div>
                );
              })}
            <button type="submit" className="btn btn-primary mt-2">
              <i className="fa fa-paper-plane"></i> Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
