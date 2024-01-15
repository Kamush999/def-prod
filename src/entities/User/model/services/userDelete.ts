import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {User} from "../types/user";
import {Profile} from "@/entities/Profile";

export const userDelete = createAsyncThunk<
    User,
    string,
    ThunkConfig<string>
>(
    "user/userDelete",
    async (profileId, thunkApi) => {
        const {
            extra, rejectWithValue
        } = thunkApi;

        try {
            const response = await extra.api.delete<User>(`/users/${profileId}`);
            const responseProfileData = await extra.api.delete<Profile>(`/profile/${profileId}`);
            if (!response.data || !responseProfileData.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            // @ts-ignore
            return rejectWithValue(e.message || "Something went wrong");
        }
    }
);