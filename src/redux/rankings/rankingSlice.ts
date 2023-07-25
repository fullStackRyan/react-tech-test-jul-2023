import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/extractErrorMessage";
import rankingService from "./rankingService";
import { RankingState } from "../../types/Types";

const initialState: RankingState = {
  rankings: null,
  isLoading: false,
};

export const getRankings = createAsyncThunk(
  "rankings/getAll",
  async (_, thunkAPI) => {
    try {
      return await rankingService.getRankings();
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const rankingSlice = createSlice({
  name: "ranking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRankings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRankings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rankings = action.payload;
      })
      .addCase(getRankings.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default rankingSlice.reducer;
