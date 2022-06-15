const app = document.getElementById("app")
const post = document.createElement("div");
post.classList.add("post")
const postHead = document.createElement("div");
postHead.classList.add("postHead")

const img = document.createElement("img");
img.src = "https://random.imagecdn.app/500/500";

const postFoot = document.createElement("div");
postFoot.classList.add("postFoot")
const iLike = document.createElement("i");
iLike.classList.add("far");
iLike.classList.add("fa-heart");
const iCom = document.createElement("i");
iCom.classList.add("far");
iCom.classList.add("fa-comment");
const iPlane = document.createElement("i");
iPlane.classList.add("far");
iPlane.classList.add("fa-paper-plane");
const iBooked = document.createElement("i");
iBooked.classList.add("far");
iBooked.classList.add("fa-bookmark")

const profilImage = document.createElement("img");
profilImage.src = "https://random.imagecdn.app/50/50";
const profilName = document.createElement("p");
profilName.textContent = "Lorem Ipsum";
const sponsore = document.createElement("span");
sponsore.textContent = "Sponsored";
const headLeft = document.createElement("div");
headLeft.classList.add("headLeft")

const follow = document.createElement("button");
follow.textContent = "Follow";
const iMenu = document.createElement("i");
iMenu.classList.add("fas");
iMenu.classList.add("fa-ellipsis-h");
const headRight = document.createElement("div");
headRight.classList.add("headRight");

app.appendChild(post);
post.appendChild(postHead);
post.appendChild(img);
post.appendChild(postFoot);
postFoot.appendChild(iLike);
postFoot.appendChild(iCom);
postFoot.appendChild(iPlane);
postFoot.appendChild(iBooked);

postHead.appendChild(headLeft);
postHead.appendChild(headRight);
headLeft.appendChild(profilImage);
headLeft.appendChild(profilName);
profilName.appendChild(sponsore);
headRight.appendChild(follow);
headRight.appendChild(iMenu);



let postStat = {
    isBooked: true,
    pseudo: "test",
    isSponsored: false,
    avatarURL: "",
    imageURL: "",
    isLiked: true,
    likes: 300,
}