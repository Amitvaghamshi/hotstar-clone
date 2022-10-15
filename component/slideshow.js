function show(){
    let arr1=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4835/1374835-h-b4b9bc8dfef6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4633/1364633-h-f78a196931d6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8315/1328315-h-017b4fc66d35","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h"]
    let h1=document.getElementById("movie");
    let img=document.createElement("img")
    img.src=arr1[0];
    h1.append(img);


         let  i=1;
     setInterval(function(){
       
       img.src=arr1[i];
       h1.append(img);
       i++;
       if(i==arr1.length){
           i=0
       }
     },3000)
}

export default show