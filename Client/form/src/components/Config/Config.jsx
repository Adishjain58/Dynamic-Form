import Question from "../Question/Question";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Config = () => {
  const [questions, setQuestion] = useState([
    {
      name: "",
      type: "",
      required: false,
      options: [
        {
          value: "",
        },
      ],
    },
  ]);
  const navigate = useNavigate();

  const handleAdd = () => {
    questions.push({
      name: "",
      type: "",
      required: false,
      options: [
        {
          value: "",
        },
      ],
    });
    setQuestion([...questions]);
  };

  const handleChange = (e, index) => {
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.name === "required") {
      questions[index][name] = e.target.checked;
    } else {
      questions[index][name] = value;
    }
    setQuestion([...questions]);
  };

  const handleDelete = (index) => {
    let data = questions.slice();
    data.splice(index, 1);
    setQuestion([...data]);
  };

  const handleAddOption = (index) => {
    questions[index].options.push({
      value: "",
    });
    setQuestion([...questions]);
  };

  const handleOptionChange = (e, elementIndex, optionIndex) => {
    questions[elementIndex].options[optionIndex].value = e.target.value;
    setQuestion([...questions]);
    console.log(questions);
  };

  const handleOptionsDelete = (elementIndex, optionIndex) => {
    questions[elementIndex].options.splice(optionIndex, 1);
    setQuestion([...questions]);
  };

  const handleSubmit = () => {
    axios.post("/formConfig", questions).then(() => {
      navigate("/form");
    });
  };
  return (
    <div
      className="container d-flex mt-5 mb-5 justify-content-center flex-column align-items-center"
      style={{ width: "600px" }}
    >
      <div className="row" style={{ width: "100%" }}>
        <div className="col-md-6 text-center">
          <button
            className="btn btn-primary"
            style={{ width: "50px" }}
            onClick={handleAdd}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="col-md-6 text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fa fa-paper-plane"></i> Submit
          </button>
        </div>
      </div>

      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            index={index}
            state={questions[index]}
            handleDelete={handleDelete}
            handleChange={handleChange}
            handleAddOption={handleAddOption}
            handleOptionChange={handleOptionChange}
            handleOptionsDelete={handleOptionsDelete}
          />
        );
      })}
    </div>
  );
};

export default Config;
