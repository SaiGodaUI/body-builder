export const exerciseOptions = {
  method: "GET",
  //   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "X-RapidAPI-Key": "2aeceb9af4msh1b6e58812a1f885p1fc248jsne3c43908343a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': '2aeceb9af4msh1b6e58812a1f885p1fc248jsne3c43908343a',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
