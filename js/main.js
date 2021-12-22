let fragment = document.createDocumentFragment()
;(async function () {
    let dataNews = await fetch ('https://jsonplaceholder.typicode.com/users')
    let resultArr = await dataNews.json()


    resultArr.forEach(item => {
        let tempClone = templateNew.content.cloneNode(true)

        tempClone.querySelector('.post__id').textContent = item.id
        tempClone.querySelector('.post__name').textContent = item.name
        tempClone.querySelector('.post__email').textContent = item.email
        tempClone.querySelector('.post__address').textContent = item.address.city

        fragment.appendChild(tempClone)
    });
    
    news.appendChild(fragment)
    console.log(dataNews);
    console.log(resultArr);
}) ()
