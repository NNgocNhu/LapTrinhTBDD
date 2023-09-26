//Get Fetch
fetch('https://650f08f554d18aabfe99c3e6.mockapi.io/posts')
  .then(response => response.json())
  .then(
    (data) => {
      var htmls = data.map(
        function (posts) {
          return `<li> 
                                        <h2>${posts.id}</h2>
                                        <h2>${posts.title}</h2>
                                        </li>`
        }
      );
      var html = htmls.join();
      var text = document.getElementById('info').innerHTML
        = html;
    }
  )
  .catch(() => console.log('Có lỗi!'))
fetch('https://650f08f554d18aabfe99c3e6.mockapi.io/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));


//Creating a resource
fetch('https://650f08f554d18aabfe99c3e6.mockapi.io/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//Updating a resource
fetch('https://650f08f554d18aabfe99c3e6.mockapi.io/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
//Deleting a resource
fetch('https://650f08f554d18aabfe99c3e6.mockapi.io/posts/1', {
  method: 'DELETE',
});
