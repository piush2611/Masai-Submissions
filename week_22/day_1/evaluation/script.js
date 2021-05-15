// id for carosuel manipulation
let id = 0

// carousel data
const carouselData = [
    {
        id: 0,
        imgUrl: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nisi vel reiciendis eum, natus deserunt optio ad mollitia, expedita officia earum quos repudiandae consequatur inventore illo! Sed, sunt expedita! Nisi!',
        username: 'Lionel Messi',
        designation: 'Frontend Developer'
    },
    {
        id: 1,
        imgUrl: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nisi vel reiciendis eum, natus deserunt optio ad mollitia, expedita officia earum quos repudiandae consequatur inventore illo! Sed, sunt expedita! Nisi!',
        username: 'Neymar Jr',
        designation: 'Backend Developer'
    },
    {
        id: 2,
        imgUrl: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nisi vel reiciendis eum, natus deserunt optio ad mollitia, expedita officia earum quos repudiandae consequatur inventore illo! Sed, sunt expedita! Nisi!',
        username: 'Kylian Mbappe',
        designation: 'Full Stack Developer'
    }
]

// function for carousel manipulation
function carouselManipulation(flag) {
    let profilePic = document.getElementById('profilePic')
    let testimonial = document.querySelector('.testimonial')
    let username = document.querySelector('.username')
    let designation = document.querySelector('.designation')
    let testimonialData

    if (flag) {
        id == 0 ? testimonialData = carouselData[carouselData.length - 1] : testimonialData = carouselData[id - 1]
    }
    else {
        id == 2 ? testimonialData = carouselData[0] : testimonialData = carouselData[id + 1]
    }

    profilePic.setAttribute('src', testimonialData['imgUrl'])
    testimonial.textContent = testimonialData['testimonial']
    username.textContent = testimonialData['username']
    designation.textContent = testimonialData['designation']

    id = Number(testimonialData['id'])
}

// blog data
let blogData = [
    {
        id: 1,
        imgUrl: 'https://picsum.photos/300',
        category: 'Sports',
        username: 'Gerard Pique',
        title: 'How to defence like nobody will walk past you ? '
    },
    {
        id: 2,
        imgUrl: 'https://picsum.photos/300',
        category: 'News',
        username: 'Lionel Messi',
        title: 'How to be a greatest footballer of all time  ? '
    },
    {
        id: 3,
        imgUrl: 'https://picsum.photos/300',
        category: 'Sports',
        username: 'Zendine Zidane',
        title: 'How to win back to back champions league ?'
    }
]

// function to populate cards in ui
function populateCards() {
    let cardsContainer = document.getElementById('cards')
    let output = ''
    blogData.forEach(card => {
        output += `   
        <div>
            <img src=${card.imgUrl} alt="card-image" />
            <div class='catAndUsername'>
                <div>${card.category}</div>
                <div> by ${card.username}</div>
            </div>
            <div>${card.title}</div>
            <button onclick="deleteCard(${card.id})">Delete</button>
        </div>
    `
    })

    cardsContainer.innerHTML = output
}

// function to delete card
function deleteCard(id) {
    blogData = blogData.filter(card => card.id != id)
    populateCards()
}

// function to add new card 
function addCard() {
    let imgUrl = document.querySelector('.newBlogImgUrl').value
    let category = document.querySelector('.newBlogCategory').value
    let username = document.querySelector('.newBlogUsername').value
    let title = document.querySelector('.newBlogTitle').value

    let id = blogData[blogData.length - 1]['id']

    let newBlog = {
        id: id + 1,
        imgUrl: imgUrl,
        category: category,
        username: username,
        title: title
    }

    blogData.push(newBlog)
    populateCards()

    document.querySelector('.newBlogImgUrl').value = ''
    document.querySelector('.newBlogCategory').value = ''
    document.querySelector('.newBlogUsername').value = ''
    document.querySelector('.newBlogTitle').value = ''
}

window.onload = populateCards()