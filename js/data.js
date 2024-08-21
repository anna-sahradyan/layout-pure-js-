const tea = [
    {img: "/images/black.svg", title: "Black"},
    {img: "/images/green.svg", title: "Green"},
    {img: "/images/white.svg", title: "White"},
    {img: "/images/oolong.svg", title: "Oolong"},
    {img: "/images/puerh.svg", title: "Pu-erh"},
];
const reviews = [{
    desc: "\"As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit.\"",
    name: "Alice"
}, {
    desc: "\"As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit.\"",
    name: "Mad-Hatter"
}, {
    desc: "\"If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed.\"",
    name: "Dormouse"
}, {
    desc: "\"I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience.\"",
    name: "March Hare"
}]
const blog = [
    {
        img: "/images/blog-1.webp",
        title: "Tea Time Travels: Funny Moments from Around the World",
        link: '#',
        author: "by Robinson Crusoe"

    }, {
        img: "/images/blog-2.webp",
        title: "Tea-rific Tales: Hilarious Stories from Tea Lovers",
        link: '#',
        author: "by Author Authorius"

    }, {
        img: "/images/blog-3.webp",
        title: "The Role of Tea in Mental Health\n",
        link: '#',
        author: "by Joker"

    }, {
        img: "/images/blog-4.webp",
        title: "Tea and Caffeine: Effects on the Brain and Behavior",
        link: '#',
        author: "by Robinson Crusoe"

    },

];
const prioritise = [
    {
        desc: 'Complete transparency',
        img: "/images/garden1.svg",
        title: 'Single garden teas'
    },
    {
        desc: 'Best Drinking Experience',
        img: "/images/garden2.svg",
        title: 'Only Loose leaf tea '
    }, {
        desc: 'No bots, no automated replies',
        img: "/images/headphone.svg",
        title: 'Customer support'
    }, {
        desc: 'Save, Convenient, Reliable',
        img: "/images/cube.svg",
        title: 'Fast shipping'
    }

]

function allPrioritise() {
    const prioritiseInner = document.querySelector('.prioritise__list');
    prioritiseInner.innerHTML = prioritise.map((item) => {
        return  ` <li class="prioritise__item">
                    <h4 class="prioritise__title">${item.title}</h4>
                    <p class="prioritise__text">${item.desc}</p>
                    <img src="${item.img}" alt='prioritise'></li>`
    }).join('')
}

function allReviews() {
    const review = document.querySelector('#reviewsText');
    review.innerHTML = reviews.map((item) => {
        return `<li class="reviews__item">
            <blockquote>
                <p class="reviews__text">${item.desc}</p>
                <cite class="reviews__name">${item.name}</cite>
            </blockquote>
        </li>`;
    }).join('');
}

/*renderTeaItems*/
function renderTeaItems() {
    const teaList = document.querySelector('#teaList');
    teaList.innerHTML = tea.map((item) => {
        return `<li class="assortment__item"><img src="${item.img}" alt="${item.title}" class="assortment__img">
                    <p class="assortment__name">${item.title}</p>
                </li>`;
    }).join(' ');
}

function renderBlogCard() {
    const blogList = document.querySelector('#blog');
    blogList.innerHTML = blog.map((item) => {
        return `   <li class="main__blog_item">
                    <img src=${item.img} alt="blog-1" class="main__blog_item-img">
                    <div class="main__blog-content">
                    <h3 class="main__blog_item-title">${item.title}</h3>
                    <a href=${item.link} class="main__blog_item-author">${item.author}</a>
                    <a href=${item.link} class="main__blog_item-link">Read</a>
                    </div>
                </li>`
    }).join('')
}

document.addEventListener("DOMContentLoaded", () => {
    allReviews();
    renderTeaItems();
    renderBlogCard();
    allPrioritise();
});
