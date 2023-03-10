import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
	name: "article",
	initialState: [],
	reducers: {
		updateArticles: (state, action) => action.payload.articles,
	},
});

export const { updateArticles } = articleSlice.actions;
export default articleSlice.reducer;
