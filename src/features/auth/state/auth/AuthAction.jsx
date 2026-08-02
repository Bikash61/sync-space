import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/AxiosInstance";

export let loginEmployee = createAsyncThunk('auth/login',
    async (credentials,thunkApi)=>{
        try{
            let res = await axiosInstance.post("/auth/login",credentials);
            return res.data;

        }catch(error){
            return thunkApi.rejectWithValue(error.response?.data || error.message);
        }

})