import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Post = {
    id: string;
    title: string;
    content?: string;
}

const initialState: Post[] = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action: PayloadAction<Post>) {
            state.push(action.payload);
        },
        postUpdated(state, action: PayloadAction<Post>) {
            const { id, title, content } = action.payload;
            const post = state.find(post => post.id === id)
            if (post) {
                post.title = title
                post.content = content
            }
        }
    }
})

export const { postAdded, postUpdated } = postsSlice.actions

export const selectPost = (postId?: string) => (state: RootState) => state.posts.find((post) => post.id === postId)

export default postsSlice.reducer