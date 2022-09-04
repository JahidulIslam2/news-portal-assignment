

const catagories=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => getCatagories(data.data.news_category))
    .catch((error) => {console.log(error)})
}

// catagory name
const getCatagories=(newsData)=>{
  console.log(newsData)
    const getParentDiv=document.getElementById('btn-container');
    newsData.forEach(news => {
        const createElement=document.createElement('div');
        createElement.classList.add('div')
        createElement.innerHTML=`
                    <a onclick="showCatagoryNews(${news.category_id})" class="navbar-brand active" href="#">${news.category_name}</a>

                    `;
                    getParentDiv.appendChild(createElement)
    });
    
}



//news api
const showCatagoryNews =(NewsShow)=>{
    fetch(`https://openapi.programming-hero.com/api/news/category/0${NewsShow}`)
    .then(res => res.json())
    .then(data => NewsInCard(data.data))
    .catch((error) => {console.log(error)})


}

showCatagoryNews();

const NewsInCard =(cardNews)=>{
console.log(cardNews)
    const getCarId=document.getElementById('card-id');
    cardNews.forEach(cardItem => {
        const createCardDiv=document.createElement('div');
        createCardDiv.innerHTML=`
        <div class="card mb-3 mt-5"> 
        <div class="row g-0">
          <div class=" col-lg-4 col-md-4 col-sm-3 col-xs-3 h-100%">
            <img src="${cardItem.thumbnail_url}" class="img-fluid h-100% w-auto  alt="...">
          </div>
          <div class="col-md-8 col-lg-8 col-sm-8 col-xs-12">
            <div class="card-body">
              <h5 class="card-title">${cardItem.title}</h5>
                <p class="card-text" style="width: 100%;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${cardItem.details}</p>
           <div class=" col-lg-1 col-md-1 col-sm-1 col-xs-2 align-content-start d-inline g-5 ">
              <img src="" class="img-thumbnail align-content-end border-radius:100%" alt="...">
                <p>${cardItem.author.name == "system" ? "no data available" :cardItem.author.name}</p>
                <p>${cardItem.author.published_date}</p>
                <p>Total Views: ${cardItem.total_view}</p>
              </div>
              <button onclick="NewsDetailsInModal('${cardItem._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#DetailsMore">Details</button>
            </div>
          </div>
        </div> 
      </div>
        `;
    
        getCarId.appendChild(createCardDiv);
    });


}
// modal
const NewsDetailsInModal =NewsDetails=>{
  const url=`https://openapi.programming-hero.com/api/news/${NewsDetails}`
  fetch(url)
  .then(res => res.json())
  .then(data => DetailsInModal(data.data))
  .catch((error) =>{console.log(error)})
}


const DetailsInModal =modalData=>{

console.log(modalData)

}


DetailsInModal()

catagories();