import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  //input配列の重複のないspeciesプロパティの値を格納
  const species  = Array.from(new Set(input.map(
    (
//{species:species} ) => {return species})));
      {species}  ) => species)));

  return species.map((species) => {
    return {
      "id":species,
      "data":input
      // item:input配列の要素
        .filter((item) => item.species === species)
        // sepalLengthのプロパティ名をxに一時的に変更してる？
        .map(({"sepalLength":x, "petalWidth":y}) => ({x:x,y:y}) ),

    };
  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
        dataUrl="data/iris.json"
        convertData={convertData}
        instruction={instruction}
        title="Lesson 04"
        Chart={Chart}
      />
    );
  };

  export default Lesson;
