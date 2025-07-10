import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedSubItemState {
  value: string;
}

const initialState: SelectedSubItemState = {
  value: '',
};

export const selectedSubItemSlice = createSlice({
  name: 'selectedSubItem',
  initialState,
  reducers: {
    setSelectedSubItem: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedSubItem } = selectedSubItemSlice.actions;
export default selectedSubItemSlice.reducer;
