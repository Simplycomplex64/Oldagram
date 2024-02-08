//variables declarations
const avatarEl = document.getElementById("avatar-el")
const nameUser = document.getElementById("name-user")
const locationEl = document.getElementById("location")
const vanGoghselfieEl = document.getElementById("vanGoghselfie-el")
const likesCountEl = document.getElementById("likes-count-el")
const commentEl = document.getElementById("comment-el")
const spanCommentEl = document.getElementById("span-comment-el")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Joachim James",
        username: "simplycomplex",
        location: "Montreal, Canada",
        avatar: "images/me.jpg",
        post: "images/me.jpg",
        comment: "Just uploaded a new profile picture",
        likes: 15
    }
]


function displayPost() {
    // Get the container to append posts
    const container = document.querySelector('.container');

    // Loop through the posts array
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        // Create elements for post information
        const miniHeader = document.createElement('section');
        miniHeader.classList.add('mini-header');

        const avatarImg = document.createElement('img');
        avatarImg.src = post.avatar;
        avatarImg.alt = `avatar-${post.username}`;
        miniHeader.appendChild(avatarImg);

        const userName = document.createElement('p');
        userName.classList.add('user-name');
        userName.innerHTML = `${post.name}<br><span class="location">${post.location}</span>`;
        miniHeader.appendChild(userName);

        // Append mini header to main container
        container.appendChild(miniHeader);

        // Create elements for post image
        const postSection = document.createElement('section');
        postSection.classList.add('post');

        const postImg = document.createElement('img');
        postImg.classList.add('VanGoghSelfie');
        postImg.src = post.post;
        postImg.alt = `Post by ${post.name}`;
        postSection.appendChild(postImg);

        // Append post section to main container
        container.appendChild(postSection);

        // Create elements for controls
        const controlsSection = document.createElement('section');
        controlsSection.classList.add('controls');

        const likeIcon = document.createElement('img');
        likeIcon.classList.add('mini-icons');
        likeIcon.src = 'images/icon-heart.png';
        likeIcon.alt = 'Like icon';
        controlsSection.appendChild(likeIcon);

        const commentIcon = document.createElement('img');
        commentIcon.classList.add('mini-icons2');
        commentIcon.src = 'images/icon-comment.png';
        commentIcon.alt = 'Comment icon';
        controlsSection.appendChild(commentIcon);

        const dmIcon = document.createElement('img');
        dmIcon.classList.add('mini-icons2');
        dmIcon.src = 'images/icon-dm.png';
        dmIcon.alt = 'DM icon';
        controlsSection.appendChild(dmIcon);

        const likesCount = document.createElement('p');
        likesCount.classList.add('likes-count');
        likesCount.textContent = `${post.likes} likes`;
        controlsSection.appendChild(likesCount);

        const commentText = document.createElement('p');
        commentText.classList.add('comment');
        commentText.innerHTML = `${post.username} <span>${post.comment}</span>`;
        controlsSection.appendChild(commentText);

        // Append controls section to main container
        container.appendChild(controlsSection);
    }
}

// Call the function to display posts
displayPost();

document.addEventListener("DOMContentLoaded", function() {
    const likeIcons = document.querySelectorAll('.mini-icons');

    likeIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            const likesCount = icon.parentElement.querySelector('.likes-count');
            let currentLikes = parseInt(likesCount.textContent);
            currentLikes++;
            likesCount.textContent = currentLikes + ' likes';
        });
    });
});

