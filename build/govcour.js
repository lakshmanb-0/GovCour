import { Topicsname, trendingsection, topsection } from "./videosjson.js";
const Topics = document.querySelector('.topics');
const trending_page = document.querySelector('.trending .trending-page');
const popular_topic_span = document.querySelectorAll('.topic .content span');
const topiccolumn = document.querySelector('.topics .content');
const model = document.querySelector('.model');
const model_cross = document.querySelector('.model i');
const model_iframe = document.querySelector('.model iframe');

// popular topics event 
popular_topic_span.forEach(e => {
    e.addEventListener('click', (top) => {
        let Topic = top.target.innerText;
        Topics.style.display = "block";
        const head = document.querySelector('.topics h1');
        head.innerHTML = Topic;
        addvideo(Topic);
    })
})

// addvideo function 
function addvideo(Topic) {
    topiccolumn.innerHTML = "";
    for (let index = 0; index < Topicsname.length; index++) {
        if (Topic == Topicsname[index].Topic) {
            for (let i = 0; i < Topicsname[index].Video.length; i++) {
                let a = `<div class="trend" >
                    <img src=${Topicsname[index].Video[i].img} alt="${Topicsname[index].Video[i].alt}">
                    <p class="title">${Topicsname[index].Video[i].title}</p>
                    <p class="author">${Topicsname[index].Video[i].author}</p>
                    <src class="src">${Topicsname[index].Video[i].src}</src>
                  </div>`;
                topiccolumn.insertAdjacentHTML("beforeend", a);
            }
        }
    }
}

// cross the model 
model_cross.addEventListener('click', () => {
    model.style.display = "none";
    const source = model_iframe.src;
    model_iframe.src = "";
    model_iframe.src = source;
})

// content video click event 
const video = document.querySelectorAll('.topics .content');
video.forEach(e => {
    e.addEventListener('click', (el) => {
        let text = document.querySelector('.topics h1').innerText;
        for (let index = 0; index < Topicsname.length; index++) {
            if (text == Topicsname[index].Topic) {
                for (let i = 0; i < Topicsname[index].Video.length; i++) {
                    if (el.target.alt == Topicsname[index].Video[i].alt) {
                        model_iframe.src = Topicsname[index].Video[i].src;
                        model.style.display = "grid";
                    }
                }
            }
        }
    })
})

// auto load both section 
window.addEventListener('load', () => {
    // trending video section 
    for (let index = 0; index < trendingsection.length; index++) {
        let a = `<div class="trend" >
                    <img src=${trendingsection[index].img} alt="${trendingsection[index].alt}">
                    <p class="title">${trendingsection[index].title}</p>
                    <p class="author">${trendingsection[index].author}</p>
                    <src class="src">${trendingsection[index].src}</src>
                  </div>`;
        trending_page.insertAdjacentHTML('beforeend', a);
    }
    const trendvideo = document.querySelectorAll('.trending-page');
    trendvideo.forEach(e => {
        e.addEventListener('click', (el) => {
            console.log('hello');
            for (let i = 0; i < trendingsection.length; i++) {
                if (el.target.alt == trendingsection[i].alt) {
                    model_iframe.src = trendingsection[i].src;
                    model.style.display = "grid";
                }
            }

        })
    })

    // topvideo section 
    const top_page = document.querySelector('#trend .trending-page');
    for (let index = 0; index < topsection.length; index++) {
        let a = `<div class="trend" >
                    <img src=${topsection[index].img} alt="${topsection[index].alt}">
                    <p class="title">${topsection[index].title}</p>
                    <p class="author">${topsection[index].author}</p>
                    <src class="src">${topsection[index].src}</src>
                  </div>`;
        top_page.insertAdjacentHTML('beforeend', a);
    }
    const topvideo = document.querySelectorAll('#trend .trending-page');
    topvideo.forEach(e => {
        e.addEventListener('click', (el) => {
            console.log('hello');
            for (let i = 0; i < topsection.length; i++) {
                if (el.target.alt == topsection[i].alt) {
                    model_iframe.src = topsection[i].src;
                    model.style.display = "grid";
                }
            }

        })
    })
})



