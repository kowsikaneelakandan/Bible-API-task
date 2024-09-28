fetch("https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10")
  .then((response) => response.json())
  .then((json) => { console.log(json)
     let li =`<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Chapter</th>
    <th>verse</th> 
    <th>Text</th>
    </tr>`;
    json.verses.forEach((user) => {
      li += `<tr>
        <td>${user.book_id}</td>
        <td>${user.book_name} </td>
        <td>${user.chapter}</td>
        <td>${user.verse}</td>
        <td>${user.text}</td>
      </tr>`;
    });
    document.getElementById("user").innerHTML = li;  
    
    
    
    
    
    
    
    
    
})