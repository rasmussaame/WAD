var ajaxSrc = "json/posts.json";

$(function() {
    $.get(ajaxSrc, function(posts) {
        let posterArea = $('<div class= "posterArea">');
        
        for (post of posts) {

            let onePoster = $('<div class="poster">');
            let topper =  $('<div class="topper">');
            let userPhoto = $('<img src="images/user.png" alt="sticky" />');
            let date = $('<p class = date>').text(post.createdAt);
            topper.append(userPhoto);
            topper.append(date);
            onePoster.append(topper);

            let coverPhoto = $('<img />').attr('src', post.image);
            onePoster.append(coverPhoto);

            let text = $('<h2">').text(post.body);
            posterArea.append(text);

            let likeDiv = $('<div class="poster">');
            let likeImg = $('<img />')
            .attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/SMirC-thumbsup.svg/1200px-SMirC-thumbsup.svg.png")
            .attr('alt', "Like");





            posterArea.append(onePoster);



            
            
        }
        $('body').append(posterArea)
    })
});

<div class="posterArea">
<div class="poster">
            <div class="topper">
                <img src="images/user.png" alt="sticky" />
                <p class = "date">Sep 23, 2021 15:30</p>

            </div>
            <img src="https://wallpapercave.com/wp/wp2759075.png" alt="Poster 1">
            <h2>I think it's going to rain</h2>
            <div class="like">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/SMirC-thumbsup.svg/1200px-SMirC-thumbsup.svg.png" alt="Like">
            </div>
        </div>
        </div>