import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
    persist(
        (set) => ({
            user: {},
            setLoggedUser: (loggedUser) => {
                set(produce((state) => {
                    state.user = loggedUser
                }))
            }
        })
    )
)

export const selectUser = (state) => state.user;
export const selectSetLoggedUser = (state) => state.setLoggedUser;

export default useUserStore;