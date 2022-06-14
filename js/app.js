const app = document.getElementById("app")
const post = document.createElement("div");
post.classList.add("post")
const postHead = document.createElement("div");
postHead.classList.add("postHead")
const img = document.createElement("img");
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

app.appendChild(post);
post.appendChild(postHead);
post.appendChild(img);
post.appendChild(postFoot);
postFoot.appendChild(iLike);
postFoot.appendChild(iCom);
postFoot.appendChild(iPlane)
postFoot.appendChild(iBooked)
img.src = "https://random.imagecdn.app/500/500";

let postStat = {
    isBooked: true,
    pseudo: "test",
    isSponsored: false,
    avatarURL: "",
    imageURL: "",
    isLiked: true,
    likes: 300,
}