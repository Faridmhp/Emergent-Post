let mainDiv = document.getElementById('container');
let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos";
fetch(fetchURL)
    .then(res => res.json())
    .then(posts => {
        document.getElementById("count").innerHTML = `They are ${posts.length} Photo(s) being shown`; // updating th eimage count
        posts.forEach(post => {
            // creatPhotoCard(post);
            var ele = document.createElement('form');
            ele.className = "home=form";
            let newDiv = document.createElement('div');
            newDiv.className = "div-post";
            let img_link = document.createElement('img');
            img_link.className = "post-image";
            img_link.setAttribute("src", post.thumbnailUrl);
            img_link.setAttribute("alt", "Image Couldn't Load");

            let titleDiv = document.createElement('div');
            titleDiv.className = "title";
            newDiv.appendChild(img_link);
            newDiv.appendChild(titleDiv);
            console.log(newDiv);

            ele.appendChild(newDiv);
            mainDiv.appendChild(ele);
            console.log(ele);

        })
    })
    .catch(err => console.log(err))



