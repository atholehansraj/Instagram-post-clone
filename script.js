let user = [
  {
    username: "travel_diaries",
    userlocation: "Paris, France",
    userprofile:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 1200,
    commentCount: 45,
    shareCount: 30,
    caption:
      "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
    timeAgoUploaded: 5,
  },
  {
    username: "foodie_lover",
    userlocation: "Mumbai, India",
    userprofile:
      "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false ,
    likeCount: 530,
    commentCount: 20,
    shareCount: 12,
    caption: "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
    timeAgoUploaded: 12,
  },
  {
    username: "fitness_freak",
    userlocation: "New York, USA",
    userprofile:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 800,
    commentCount: 60,
    shareCount: 25,
    caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
    timeAgoUploaded: 24,
  },
  {
    username: "artsy_corner",
    userlocation: "London, UK",
    userprofile:
      "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 950,
    commentCount: 78,
    shareCount: 40,
    caption:
      "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
    timeAgoUploaded: 7,
  },
  {
    username: "adventure_seeker",
    userlocation: "Kyoto, Japan",
    userprofile:
      "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 600,
    commentCount: 33,
    shareCount: 18,
    caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
    timeAgoUploaded: 18,
  },
];


function postFun() {
  let clutter = "";
  user.forEach(function(val, index) {
    clutter += `
        <div class="post">
            <div class="user-name">
                <div class="left">
                    <img src="${val.userprofile}" alt="">
                    <div class="name">
                        <h3>${val.username} </h3>
                        <img src="./blue-tick.png" alt="">
                    </div>
                </div>
                <div class="right">
                    <button>Follow</button>
                    <img src="./three-dots.png" alt="">
                </div>
            </div>
            <div class="image">
                <img  " src="${val.userPost}" alt="">
                <i class="ri-heart-fill"></i>
            </div>
            <div class="post-tools">
                <div class="post-feature">
                    <div class="like"  >
                        <span id=${index} >${val.like ? `<i  style="color :red"  class="ri-heart-fill"></i>` : `<i class="ri-heart-line"></i>`}</span>
                        <p>${val.likeCount}</p>
                    </div>
                    <div class="comment">
                        <i class="ri-chat-1-line"></i>
                        <p>${val.commentCount}</p>
                    </div>
                    <div class="share">
                        <i class="ri-share-forward-line"></i>
                        <p>${val.shareCount}</p>
                    </div>
                </div>
                <div class="post-save">
                    <i class="ri-save-line"></i>
                </div>
            </div>
            <div class="post-detail">
                <div class="discription">
                    <p><span id="span"> ${val.username}</span> ${val.caption} </p>
                </div>
                <div class="comment">
                    <p>View all comments</p>
                </div>
                <div class="time">
                    <p>${val.timeAgoUploaded} days ago</p>
                </div>
            </div>
        </div>    
    `;
});

  let posts = document.querySelector(".posts");
  posts.innerHTML = clutter;
}
postFun()


let posts = document.querySelector(".posts");
posts.addEventListener("click",function(dets){
    // console.log(user[dets.target.id].like);

    if(user[dets.target.id].like){
      user[dets.target.id].like = false
      user[dets.target.id].likeCount--
      
    }else{
      user[dets.target.id].like = true;
      user[dets.target.id].likeCount++;

    }
    
    postFun()
})




// function likepostbyicon(){
//     let posts = document.querySelector(".posts ")
//     posts.addEventListener('click', function(e) {
        
//         // console.log(e.target.parentElement.className === "like");

        
//         // console.log(user[e.target.parentElement.id])
//         let icon = e.target

//         if (e.target.parentElement.className === "like"){
//                 if(user[e.target.parentElement.id].like == true){
//                     user[e.target.parentElement.id].likeCount --
//                     user[e.target.parentElement.id].like = false
            
//                 }
//                 else{
//                     user[e.target.parentElement.id].likeCount ++
//                     user[e.target.parentElement.id].like = true
            
//                 }
//     }   
    
//         postFun()
    
//     });
    
// }
// likepostbyicon()

// function likepostbyimage(){

//     let posts = document.querySelector(".posts ")
//     posts.addEventListener('dblclick', function(e) {
//         console.log("ok")
//         if (e.target.parentElement.className === "image"){
//                 if(user[e.target.id].like == true){
//                     user[e.target.id].likeCount --
//                     user[e.target.id].like = false
            
//                 }
//                 else{
//                     user[e.target.id].likeCount ++
//                     user[e.target.id].like = true
            
//                 }
                
//         }   
    
//         postFun()
    
//     });


// }
// likepostbyimage();