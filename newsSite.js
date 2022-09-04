
// first api fetch
const catagories=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => getCatagories(data.data.news_category))
    .catch((error) =>{alert(error)})
}

// catagory name
const getCatagories=(newsData)=>{
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
    const getCarId=document.getElementById('card-id');
    getCarId.innerText="";
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
           <div class=" col-lg-1 col-md-1 col-sm-1 col-xs-2 g-0 d-inline-flex m-5">
                <img src="${cardItem.author.img}" class="w-100 px-15px rounded-circle mt-5"   alt="...">
              </div>
            <div class="d-inline-block d-md-inline-block d-sm-inline-block">
                <p class="my-4">${cardItem.author.name}</p>
                <p>${cardItem.author.published_date}</p>
                <p>Total Views: ${cardItem.total_view}</p>
              </div>
              <button onclick="NewsDetailsInModal('${cardItem._id}')" type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#DetailsMore">Details</button>
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
  .then(data => DetailsInModal(data.data[0].author.name))
  .catch((error) =>{console.log(error)})
}


const DetailsInModal =modalData=>{
  console.log(modalData)
const getModalId=document.getElementById('DetailsMore');
getModalId.innerHTML=`

    <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="DetailsMoreLabel">Author Name :</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <h2>${modalData == "system" ? "No data available" :modalData}</h2>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
`;

}
 DetailsInModal();

 
catagories();