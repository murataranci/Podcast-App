import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const Base_url='https://nox-podcast-api.vercel.app'

export const login = createAsyncThunk('user/login',async(data)=>{

    const response = await fetch(`${Base_url}/login`, {
        method: "POST",
        header: [],
        mode:'cors',
        body: {
            mode: "raw",
            raw: {
                email:data.email,
                password:data.password
            },
            options: {
                raw: {
                    language:"json"
                }
            }
        },
        url: {
            raw: `${Base_url}/login`,
            host: [
                {Base_url}
            ],
            path: [
                "login"
            ]
        }
    });

    return response.json().access_token
})

export const userSlice = createSlice({
    name:'user',
    initialState:{
        token:'123',
        error:'',
        isLoading:false
    },
    reducers:{},
    extraReducers:{
        [login.pending]:(state)=>{
            state.token=''
            state.error=''
            state.isLoading=true
        },
        [login.fulfilled]:(state,action)=>{
            state.token=action.payload
            state.error=''
            state.isLoading=false
        },
        [login.rejected]:(state,action)=>{
            state.error=action.payload
            state.token=''
            state.isLoading=false
        }
    }
})

export default userSlice.reducer