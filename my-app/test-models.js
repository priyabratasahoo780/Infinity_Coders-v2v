const key = 'AIzaSyBiFUm7nrfLYe78AY8c33Sb7YtEq2qSfTQ';
fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.models.map(m => m.name).filter(n => n.includes('flash')));
  })
  .catch(console.error);
