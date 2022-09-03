
const catagories=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => getCatagories(data.data.news_category))
    .catch((error) => {console.log(error)})
}

// 
const getCatagories=(newsData)=>{
        // console.log(newsData)
    const getParentDiv=document.getElementById('btn-container');
    newsData.forEach(news => {
        const createElement=document.createElement('div');
        createElement.classList.add('div')
        createElement.classList.add('sm')
        // console.log(news.category_name)
        createElement.innerHTML=`
                    <a id='catagories-item' class="navbar-brand" href="#">${news.category_name}</a>
                    
        
                    `;
                    getParentDiv.appendChild(createElement)
    });
    
}




catagories();