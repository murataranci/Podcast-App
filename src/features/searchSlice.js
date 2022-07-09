import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url = 'https://nox-podcast-api.vercel.app'

export const search = createAsyncThunk('user/search', async (data) => {

    const response = await fetch(`${base_url}/search`, {
        method: "GET",
        header: [],
        body:{
            search:data
        },
        url: {
            raw: `${base_url}/search`,
            host: [
                base_url
            ],
            path: [
                "search"
            ],
            query: [
                {
                    key: "text",
                    value: "v",
                    disabled: true
                },
                {
                    key: "category",
                    value: "art",
                    disabled: true
                },
                {
                    key: "limit",
                    value: "3",
                    disabled: true
                },
                {
                    key: "use_default_content",
                    value: "false",
                    disabled: true
                }
            ]
        },
        description: {
            Categories: ["art", "business", "entertainment", "general", "health", "science", "sports", "technology"]
        }
    })

    return response.json()
})

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        items:[],
        error:'',
        isLoading:false
    },
    reducers: {},
    extraReducers: {
        [search.pending]:(state)=>{
            state.items=[]
            state.error=''
            state.isLoading=true
        },
        [search.fulfilled]: (state, action) => {
            state.items = action.payload
            state.error = ''
            state.isLoading=false
        },
        [search.rejected]: (state, action) => {
            state.error = action.payload
            state.token = ''
            state.isLoading=false
        }
    }
})

export default searchSlice.reducer