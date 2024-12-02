const Store = async () =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const result =await response.json();
        console.log(result)
        if (result.length > 0){
            // container creation
            var container = document.createElement('div')
            // adding container to document page
            document.body.appendChild(container)
            result.map((data,index)=>{
                console.log("###############################",data)
                // Element Creation
                var product_name = document.createElement('h2');
                var product_image = document.createElement('img');
                var product_price = document.createElement('p');
                var product_category = document.createElement('h4');
                var horizontal_line = document.createElement('hr');
                
                // insert value to each elements
                product_name.innerHTML= data.title;
                product_image.src=data.image;
                product_price.innerHTML=`RS:${data.price}/-`;
                product_category.innerHTML= data.category;

                // insert elements to the container
                container.appendChild(product_name);
                container.appendChild(product_image);
                container.appendChild(product_category);
                container.appendChild(product_price);
                container.appendChild(horizontal_line);
            })

            var photos= document.getElementsByTagName('img')
            var titles= document.getElementsByTagName('h2');
            var categories= document.getElementsByTagName('h4');
            var prices= document.getElementsByTagName('p')

            for (var i=0 ; i<result.length; i++){
                photos[i].style.width="100px";
                photos[i].style.height="100px";
                titles[i].style.color="blue";
                categories[i].style.fontWeight="bold";
                prices[i].style.color="red";
            }
        }
    }catch(e){
        console.error(e);
    }
}

Store()