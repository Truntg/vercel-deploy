import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  contacts:[],
  favorites:[],
  posts: [],
};

export const fetchPosts = createAsyncThunk(
  'slice/fetchPosts',
  async (payload, thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();

     thunkAPI.fulfillWithValue(result.slice(0,10))
    return result.slice(0,10);
  }
);

export const sliceSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addContact: (state, actions) => {
        state.contacts.push(actions.payload);
    },
    removeSlice: (state, actions) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== actions.payload);
    },
    addFavorite: (state, action) => {
        state.favorites.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.favorites = action.payload
    });
  },
});

// Action creators are generated for each case reducer function
export const { addContact, removeContact, addFavorite } = sliceSlice.actions

const sliceReducer = sliceSlice.reducer;

export default sliceReducer;