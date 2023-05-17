const getNombre = (idPost) => {
    fetch(`htp://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(res => {
            return res.json();
        })
        .then(post => {
            console.log(post.userId);
            console.log(post.body);
            fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => {
                    return res.json();
                })
                .then(user => {
                    console.log(user.name);
                    console.log(user.email);
        })
    })

}

getNombre(99);
