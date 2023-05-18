const options = {
    headers: {
      'Authorization': 'Bearer thiswasmyapikeynotanymore',
      'Content-Type': 'application/json'
    }
  };
  
  fetch('https://api.openai.com/v1/chat/completions', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));