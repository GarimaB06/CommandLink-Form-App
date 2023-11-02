import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlattenedData, PayloadType } from "../../types";
import flattenData from "../../utils/utilityFunction";
import { FIELD_DATA } from "../../utils/data";

const initialState: FlattenedData = flattenData(FIELD_DATA);

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		updateFormVal: (state, action: PayloadAction<PayloadType>) => {
			const newState = { ...state[action.payload.id] };
			newState.value = action.payload.value;
			state[action.payload.id] = newState;
		},
	},
});

export const { updateFormVal } = formSlice.actions;
export default formSlice.reducer;
