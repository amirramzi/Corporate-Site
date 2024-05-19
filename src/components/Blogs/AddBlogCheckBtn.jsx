import React from "react";
import { useDispatch } from "react-redux";
import {
  htmlToggle,
  cssToggle,
  jsToggle,
  reactToggle,
} from "../../store/slice/blogsSlice";
function AddBlogCheckBtn() {
  const dispatch = useDispatch();
  const htmlHandler = () => {
    dispatch(htmlToggle());
  };
  const cssHandler = () => {
    dispatch(cssToggle());
  };
  const jsHandler = () => {
    dispatch(jsToggle());
  };
  const reactHandler = () => {
    dispatch(reactToggle());
  };

  const checkList = [
    { id: 1, name: "html", onclick: htmlHandler },
    { id: 2, name: "css", onclick: cssHandler },
    { id: 3, name: "JavaScript", onclick: jsHandler },
    { id: 4, name: "React", onclick: reactHandler },
  ];
  return (
    <div className="w-full my-3 flex flex-row-reverse justify-between ">
      <span>نوع مقاله </span>
      <div className="flex space-x-5">
        {checkList.map((list) => (
          <label key={list.id}>
            <input onClick={list.onclick} type="checkbox" name={list.name} />
            {list.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default AddBlogCheckBtn;
