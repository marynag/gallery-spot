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
        pages: data?.total_pages,
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

interface IGetPhoto {
  id: string;
}
export async function getPhoto({ id }: IGetPhoto) {
  try {
    const response = await fetch(
      `${API_URL}/photos/${id}/?client_id=${ACCESS_KEY}`
    );

    const data = await response.json();
    return {
      data: data,
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

export async function getCollection({ page = 1, query }: IRequest) {
  if (query) {
    try {
      const endpoint = `${API_URL}/search/collections/?page=${
        page ?? 1
      }&query=${query ?? ''}&client_id=${ACCESS_KEY}`;

      const response = await fetch(endpoint);

      const data = await response.json();
      return {
        data: data.results ?? [],
        success: true,
        pages: data?.total_pages,
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
      const endpoint = `${API_URL}/collections/?page=${page ?? 1}&query=${
        query ?? ''
      }&client_id=${ACCESS_KEY}`;

      const response = await fetch(endpoint);

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
