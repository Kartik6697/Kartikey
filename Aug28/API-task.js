// dummy API of 500 comments
fetch('https://jsonplaceholder.typicode.com/comments/400')
.then(res => {
    // return res.json()

    //this is for checking data is there or not
    if (res.ok) {
        console.log('successful')
            return res.json()
    } else {
        console.log('not successful')
    }
})
.then(data => console.log(data))
.catch(error => console.log('Error'))