// var ajaxSrc = "https://api.npoint.io/f787b875527fba808786";
var ajaxSrc = "json/posts.json";
$(function() {
    $.get(ajaxSrc, function(posts) {
        let posterArea = $('<div class= "posterArea">');
        
        for (post of posts) {

            let onePoster = $('<div class="poster">');
            let topper =  $('<div class="topper">');
            let userPhoto = $('<img/>').attr('src', "images/user.png");
            let date = $('<p class = date>').text(post.createdAt);
            topper.append(userPhoto);
            topper.append(date);

            let likeDiv = $('<div class="like">');
            let likeImg = $('<img />')
            .attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/SMirC-thumbsup.svg/1200px-SMirC-thumbsup.svg.png")
            .attr('alt', "Like");
            likeDiv.append(likeImg);

            onePoster.append(topper);
            onePoster.append($('<img />').attr('src', post.image));
            onePoster.append($('<h2>').text(post.body));
            onePoster.append(likeDiv);
            
            posterArea.append(onePoster);
            
        }
        $('body').append(posterArea)
    })
});
