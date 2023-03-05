
const container=document.getElementById('container');
var convertedData;
var dataFetch=async(search)=>{
  var date=new Date()

  data= await fetch(`https://newsapi.org/v2/everything?q=${search}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=publishedAt&apiKey=5f41af76642941b4b9d424d505bb7ad4`)
  
 convertedData=await data.json();
 var title="";

 var description="";
 length=Object.keys(convertedData.articles).length;
 for(var i=0; i<length; i++){
 title=convertedData.articles[i].title;
 names=convertedData.articles[i].source.name;
 description=convertedData.articles[i].description;
 const element=` <div class="card h-28 mt-5" style="width: 20rem; margin-left:2rem; margin-right:1rem">
  <img src="https://source.unsplash.com/random/300×300/?${title}" class="card-img-top" alt=${title} height="300px">
  <div class="card-body">
    <h5 class="card-title" id="element">${title===null?"Title Not Given":title}</h5>
    <p class="card-text">${description===null?"Description Not Given":description.substring(0,100)}</p>
    <button class="btn btn-primary" id=${i} data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="document.getElementById(${i}).value=${true}; readmore()" value=${false} style="margin-botton:20px">Read More</button>
  </div>
</div> `

container.insertAdjacentHTML('afterbegin',element);

 }
 
}

var readmore=()=>{
dt=document.getElementsByClassName('btn btn-primary')
for(i=0; i<dt.length; i++){
  if(dt[i].value==='true'){
   document.getElementById('exampleModalLabel').innerHTML=convertedData.articles[dt.length-i-1].title;
   document.getElementById('modalBody').innerHTML=convertedData.articles[dt.length-i-1].description;
    dt[i].value="false";
    return;
  }

}

}

const SearchData=()=>{
  event.preventDefault();
  inputSearch=document.getElementById('searchInput').value;
  if(inputSearch===''){
    alert("Please Enter a Valid Search Value ⚠️");
  }
else{
 document.getElementById('container').innerHTML="";
 dataFetch(inputSearch)
}
}
dataFetch('haridwar')
