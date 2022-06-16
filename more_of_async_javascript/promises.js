const posts = [
    { title: 'Post one', body: 'this is post One'},
    { title: 'Post Two', body: 'this is post Two'}
];

 function getPosts() {
    setTimeout(()=> {
     let output = '';
    posts.forEach((post, index) => {
    output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    }, 1000);
 }

 function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong');
            }
        }, 2000);
    });
 }
 createPost({ title:'post three', body:'this is post three' });

    .then(getPosts);