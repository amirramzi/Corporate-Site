import React from "react";

function BlogsCardTeach(props) {
  return (
    <div
      key={props.id}
      className={`${props.className ?? ""} relative flex-col p-6`}>
      <div className="mb-2 flex items-center justify-end">
        <p
          dir="rtl"
          className="block font-sans text-3xl font-bold leading-relaxed antialiased">
          {props.title}
        </p>
      </div>
      <p dir="rtl" className="text-right text-xl font-semibold text-wrap">
        {props.body}
      </p>
    </div>
  );
}

export default BlogsCardTeach;
