export const fetchMovies = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    headers: {
      Authorization:
        'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTlmNWMzYjc2N2M0MjFkOWQ1YWM4ZWE0ZTEwNTJlNyIsInN1YiI6IjY1NjljZGZlYTMxM2I4MDEzOGQ2MzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAS-9N8Tzx4V-wOTG16CCKmfUQoCEGaEGGydwmLCcYE',
    },
  });

  console.log(res.json);

  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', {
    headers: {
      Authorization:
        'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTlmNWMzYjc2N2M0MjFkOWQ1YWM4ZWE0ZTEwNTJlNyIsInN1YiI6IjY1NjljZGZlYTMxM2I4MDEzOGQ2MzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAS-9N8Tzx4V-wOTG16CCKmfUQoCEGaEGGydwmLCcYE',
    },
  });

  console.log(res.json);

  return res.json();
};
