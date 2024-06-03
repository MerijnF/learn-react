import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Post = {
    id: string;
    title: string;
    content?: string;
    userId: string;
    date: string;
    reactions: {
        thumbsUp: number;
        hooray: number;
        heart: number;
        rocket: number;
        eyes: number;
    }
}
export type Reaction = keyof Post['reactions'];

const initialState: Post[] = [
    { id: '1', userId: '1', title: 'First Post!', content: 'Hello!', date: new Date().toISOString(), reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } },
    { id: '2', userId: '2', title: 'Second Post', content: 'More text', date: new Date().toISOString(), reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded(state, action: PayloadAction<{ postId: string, reaction: Reaction }>) {
            {
                const { postId, reaction } = action.payload
                const post = state.find(post => post.id === postId)
                if (post) {
                    post.reactions[reaction]++
                }
            }
        },
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.push(action.payload);
            },
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }
                    }
                }
            }
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

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export const selectPost = (postId?: string) => (state: RootState) => state.posts.find((post) => post.id === postId)

export default postsSlice.reducer