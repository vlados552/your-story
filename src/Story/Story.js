import React, { useContext } from "react";
import { DataContext } from "../Hooks/dataContext";
import { useParams } from "react-router-dom";
import FirstStory from "./FirstStory";
import SecondStory from "./SecondStory";
import "./Story.css";

function Story(props) {
  const { data, setData } = useContext(DataContext);
  const { id } = useParams();

  function renderStory() {
    switch (id) {
      case "first-story":
        return <FirstStory />;
        break;
      case "second-story":
        return <SecondStory />;
        break;
      default:
        break;
    }
  }

  return (
    <div className="story">
      <div></div>
      <div className="grid grid-story">{renderStory()}</div>
    </div>
  );
}

export default Story;
