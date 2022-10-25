import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import tmdb from '../apis/tmdb';

const initialMovies = [];

const useMovieStore = create(
    persist(
        (set) => ({
            movies: initialMovies,
            moviesReady: false,
            fetchTrendingMovies: async () => {
                try {
                    const { data } = await tmdb.get("trending/movie/week");

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchPopularMovies: async (page, region) => {
                try {
                    const { data } = await tmdb.get("movie/popular", { params: { language: 'en-US', page, region } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchNowPlayingMovies: async (page, region) => {
                try {
                    const { data } = await tmdb.get("movie/now_playing", { params: { language: 'en-US', page, region } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchUpcomingMovies: async (page, region) => {
                try {
                    const { data } = await tmdb.get("movie/upcoming", { params: { language: 'en-US', page, region } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fectMovieCredit: async (movieId) => {
                try {
                    const { data } = await tmdb.get(`movie/${movieId}/credits`, { params: { language: 'en-US' } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchMovieVideo: async (movieId) => {
                try {
                    const { data } = await tmdb.get(`movie/${movieId}/videos`, { params: { language: 'en-US' } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            fetchMovieInfo: async (movieId) => {
                try {
                    const { data } = await tmdb.get(`movie/${movieId}`, { params: { language: 'en-US' } });

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            sortMovies: (type) => {
                if (type === 'asc') {
                    set(produce((state) => {
                        const sorted = [...state.movies].sort((a, b) => a.vote_average - b.vote_average);
                        state.movies = sorted;
                    }))
                }
                if (type === 'desc') {
                    set(produce((state) => {
                        const sorted = [...state.movies].sort((a, b) => b.vote_average - a.vote_average);
                        state.movies = sorted;
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
export const selectFetchTrendingMovies = (state) => state.fetchTrendingMovies;
export const selectFecthPopularMovies = (state) => state.fetchPopularMovies;
export const selectFetchNowPlayingMovies = (state) => state.fetchNowPlayingMovies;
export const selectFetchMovieCredit = (state) => state.fectMovieCredit;
export const selectFetchMovieVideo = (state) => state.fetchMovieVideo;
export const selectFetchMovieInfo = (state) => state.fetchMovieInfo;
export const selectMoviesReady = (state) => state.moviesReady;
export const selectSortMovies = (state) => state.sortMovies;

export default useMovieStore;
