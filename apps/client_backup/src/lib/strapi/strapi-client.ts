export const strapiFetch = async <T = any>(
  path: string,
  options: RequestInit = {},
  authToken?: string,
): Promise<T> => {
  const res = await fetch(`${process.env.STRAPI_API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken ? {Authorization: `Bearer ${authToken}`} : {}),
      ...(options.headers || {}),
    },
    cache: 'no-store',
  });
  // console.log(res);

  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.statusText}`);
  }

  return res.json();
};
