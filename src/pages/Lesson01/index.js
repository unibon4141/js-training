import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

const convertData = (input) => {
  // const  len  = input.length;
  // let newArray = [];
  // for(let i = 0;i<len;i++){
  //   newArray.push({'name': input[i][0],'count' : input[i][1]});
  // }
  // return newArray; // ここを作りましょう！ 

  // input配列の各要素の配列の２つの要素を変数name, countに代入 
  return input.map(([name,count]) => ({
    name, 
    count,
  }));
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
