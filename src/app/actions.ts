'use server';

import { ACCESS_KEY, API_URL } from '@/constants/api';

interface IRequest {
  page?: number;
  query?: string;
}

export async function getPhotos({ page = 1, query }: IRequest) {
  if (query) {
    try {
      const endpoint = `${API_URL}/search/photos/?client_id=${ACCESS_KEY}&page=${
        page ?? 1
      }&query=${query ?? ''}`;

      const response = await fetch(endpoint);

      const data = await response.json();
      return {
        data: data.results ?? [],
        success: true,
      };
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      console.error('Error fetching', errorMessage);

      return {
        data: [],
        success: false,
        error: errorMessage,
      };
    }
  } else {
    try {
      const response = await fetch(
        `${API_URL}/photos/?client_id=${ACCESS_KEY}&page=${page ?? 1}`
      );

      const data = await response.json();
      return {
        data: data ?? [],
        success: true,
      };
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      console.error('Error fetching', errorMessage);

      return {
        data: [],
        success: false,
        error: errorMessage,
      };
    }
  }
}
