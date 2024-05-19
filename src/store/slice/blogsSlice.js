import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: { list: [] },

  reducers: {
    setBlogs: (state, { payload }) => {
      state.list = payload;
    },
    addBlogs: (state, actions) => {
      state.list.push(actions.payload);
    },
    deletBlogs: (state, actions) => {
      state.list = state.list.filter((blog) => blog.id != actions.payload);
    },
    editBlogs: (state, { payload }) => {
      state.list = state.list.map((blog) => {
        if (blog.id == payload.id) {
          return {
            id: payload.id,
            title: payload.title,
            body: payload.title,
            html: payload.html,
            css: payload.css,
            JavaScript: payload.JavaScript,
            React: payload.React,
          };
        }
        return blog;
      });
    },
  },
});

export const { addBlogs, deletBlogs, setBlogs, editBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
