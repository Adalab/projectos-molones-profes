const dataApi = (data) => {
  return fetch('http://localhost:4000/api/projects/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.cardURL;
    });
};

const getAllCardsApi = () => {
  return fetch('http://localhost:4000/api/allproject')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default { dataApi, getAllCardsApi };
