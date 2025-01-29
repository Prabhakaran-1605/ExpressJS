fetch("http://localhost:3502/new-page")
.then((res)=>{ return res.json()})
.then(data=>console.log(data))