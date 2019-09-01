export const getHotdogFromDb = () =>
  fetch("/hotdog", {
    method: "GET"
  });

export const removeHotdogFromDb = id =>
  fetch(`/hotdog/delete/${id}`, {
    method: "GET"
  });

export const creteHotdogInDb = (data) =>
  fetch(`/hotdog`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());

  export const updateHotDogDB = (data) => 
    fetch('/hotdog/change', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
