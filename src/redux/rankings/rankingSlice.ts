import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/extractErrorMessage";
import rankingService from "./rankingService";
import { RankingState } from "../../types/Types";
import { RatingPayload } from "../../types/Types";

const initialState: RankingState = {
  rankings: [],
  isLoading: false,
  expertiseAndReputationRating: undefined,
  clientSatisfactionRating: undefined,
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
  reducers: {
    updateRatings: (state, action: PayloadAction<RatingPayload>) => {
      if (action.payload.expertiseAndReputationRating !== undefined) {
        state.expertiseAndReputationRating =
          action.payload.expertiseAndReputationRating;
      }
      if (action.payload.clientSatisfactionRating !== undefined) {
        state.clientSatisfactionRating =
          action.payload.clientSatisfactionRating;
      }
    },
  },
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

export const { updateRatings } = rankingSlice.actions;

export default rankingSlice.reducer;
