import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import tmdb from '../apis/tmdb';

const initialMovies = [];

const useMovieStore = create(
    persist(
        (set) => ({
            movies: initialMovies,
            upcomingMovies: initialMovies,
            nowPlayingMovies: initialMovies,
            popularMovies: initialMovies,
            trendingMovies: initialMovies,
            moviesReady: false,
            fetchTrendingMovies: async () => {
                try {
                    const { data } = await tmdb.get("trending/movie/week");

                    set(produce((state) => {
                        state.movies = data.results;
                        state.trendingMoviesxx = data.results;
                        state.moviesReady = true;
                        state.trendingMoviesReady = true;
                        //console.log('fetchTrendingMovies: ', state.trendingMovies)
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchPopularMovies: async () => {
                try {
                    const { data } = await tmdb.get("movie/popular", { params: { language: 'en-US', page: 1 } });

                    set(produce((state) => {
                        //console.log('Fetch Popular moivie: ', data.results)
                        state.movies = data.results;
                        state.popularMovies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchNowPlayingMovies: async () => {
                try {
                    const { data } = await tmdb.get("movie/now_playing", { params: { language: 'en-US', page: 1 } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.nowPlayingMovies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchUpcomingMovies: async () => {
                try {
                    const { data } = await tmdb.get("movie/upcoming", { params: { language: 'en-US', page: 1 } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.upcomingMovies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            sortMovies: (type) => {
                if (type === 'asc') {
                    set(produce((state) => {
                        const sorted = [...state.movies].sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
                        //console.log('asc: ', sorted)
                        state.movies = sorted;
                    }))
                }
                if (type === 'desc') {
                    set(produce((state) => {
                        const sorted = [...state.movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                        state.movies = sorted;
                        //console.log('desc: ', sorted)
                    }))
                }
            }
        }),
        {
            name: 'movie-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectMovies = (state) => state.movies;
export const selectTrendingMovies = (state) => state.trendingMovies;
export const selectPopularMovies = (state) => state.popularMovies;
export const selectNowPlayingMovies = (state) => state.nowPlayingMovies;
export const selectUpcomingMovies = (state) => state.upcomingMovies;
export const selectFetchTrendingMovies = (state) => state.fetchTrendingMovies;
export const selectFecthPopularMovies = (state) => state.fetchPopularMovies;
export const selectFetchNowPlayingMovies = (state) => state.fetchNowPlayingMovies;
export const selectFetchUpComingMovie = (state) => state.fetchUpcomingMovies;
export const selectMoviesReady = (state) => state.moviesReady;
export const selectSortMovies = (state) => state.sortMovies;

export default useMovieStore;
