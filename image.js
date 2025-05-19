document.addEventListener("DOMContentLoaded",()=>
{
let Url=document.querySelector(".Ul");
let FileInput=document.querySelector(".Fi");
let btn=document.querySelector(".btn");
let btn1=document.querySelector(".btn1");
btn.addEventListener("click",async()=>
{
    try
    {
      let data=await fetch(Url.value);
      if(!data.ok)
      {
        alert("Unable to fetch");
         return;
      }
      let response=await data.blob();
      let link=document.createElement('a');
      link.href=URL.createObjectURL(response);
      link.download=`${Date.now()}`
      link.click();
    }
    catch(error)
    {
      console.log(error);
    }
})
btn1.addEventListener("click",()=>
{
    try
    {
        if(FileInput.files.length>0)
        {
      let data1=FileInput.files[0];
      let link=document.createElement('a');
      link.href=URL.createObjectURL(data1);
      link.download=data1.name;
      link.click();}
      else {
                alert("No file selected");
            }
    }
    catch(error)
    {
      console.log(error);
    }
})

});