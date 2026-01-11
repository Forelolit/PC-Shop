import axios from 'axios';
import type { AuthResponse } from 'types/types';

const BACKEND_API = import.meta.env.VITE_BACKEND_API;

export const $api = axios.create({
  baseURL: BACKEND_API,
});

export const authApi = {
  googleLogin: async (googleToken: string) => {
    const res = await $api.post<AuthResponse>('/auth/google/', {
      token: googleToken,
    });
    return res.data;
  },
};
