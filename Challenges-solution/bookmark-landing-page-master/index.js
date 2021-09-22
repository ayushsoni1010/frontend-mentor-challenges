let feature = document.querySelector("#feature");
let simple = document.getElementById("simple");
let speed = document.getElementById("speed");
let easy = document.getElementById("easy");

let isActive = true;
let border = "3px solid hsl(0, 94%, 66%)";

simple.addEventListener('click', (e) => {
  if (simple.style.borderBottom != border) {
    simple.style.borderBottom = border;
    simple.style.color = "hsl(0, 94%, 66%)";
  }
  else {
    simple.style.borderBottom = 'none';
  }
})

speed.addEventListener('click', (e) => {
  if (speed.style.borderBottom != border) {
    speed.style.borderBottom = border;
    speed.style.color = "hsl(0, 94%, 66%)";
  }
  else {
    speed.style.borderBottom = 'none';
  }
})

easy.addEventListener('mousedown', (e) => {
  if (easy.style.borderBottom != border) {
    easy.style.borderBottom = border;
    easy.style.color = "hsl(0, 94%, 66%)";    
  } else {
    easy.style.borderBottom = "none";
  }
})



simple.addEventListener("click", (e) => {
  feature.innerHTML = `
                <div class="mockup-wrapper">
                  <img src="./images/illustration-features-tab-1.svg" alt="feature1">
                  <div class="bg-blue"></div>
                </div>
                <div class="content-wrapper">
                  <h1>Bookmark in one click</h1>
                  <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                  </p>
                  <button>More Info</button>
                </div>`;
});


speed.addEventListener("click", (e) => {
  feature.innerHTML = `
                <div class="mockup-wrapper">
                  <img src="./images/illustration-features-tab-2.svg" alt="feature1">
                  <div class="bg-blue"></div>
                </div>
                <div class="content-wrapper">
                  <h1>Intelligent Search</h1>
                  <p>Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.
                  </p>
                  <button>More Info</button>
                </div>`;
});


easy.addEventListener("click", (e) => {
  feature.innerHTML = `
                <div class="mockup-wrapper">
                  <img src="./images/illustration-features-tab-3.svg" alt="feature1">
                  <div class="bg-blue"></div>
                </div>
                <div class="content-wrapper">
                  <h1>Share your bookmarks</h1>
                  <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                  </p>
                  <button>More Info</button>
                </div>`;
});


let first = document.getElementsByClassName("answer-one");
let second = document.getElementsByClassName("answer-two");
let three = document.getElementsByClassName("answer-three");
let four = document.getElementsByClassName("answer-four");
