
const catagories=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => getCatagories(data.data.news_category))
    .catch((error) => {console.log(error)})
}

// 
const getCatagories=(newsData)=>{
    const getParentDiv=document.getElementById('btn-container');
    newsData.forEach(news => {
        const createElement=document.createElement('div');
        createElement.classList.add('div')
        createElement.innerHTML=`
                    <a class="navbar-brand" href="#">${news.category_name}</a>
                    
        
                    `;
                    getParentDiv.appendChild(createElement)
    });
    
}


const showCatagoryNews =()=>{

    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
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
        <div class="card mb-3 mt-5" style="max-width: 70%;">
        <div class="row g-0">
          <div class=" col-lg-4 col-md-8 col-sm-4 col-xs-4">
            <img src="${cardItem.image_url}" class="img-fluid rounded-start h-100% w-auto"  alt="...">
          </div>
          <div class="col-md-8 col-lg-8 col-sm-8 col-xs-12">
            <div class="card-body">
              <h5 class="card-title">${cardItem.title}</h5>
              <p class="card-text" style="width: 100%;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${cardItem.details}</p>
              <p></p>
            </div>
          </div>
        </div> 
      </div>
        `;
    
        getCarId.appendChild(createCardDiv);
    });


}



catagories();