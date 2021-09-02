
const loaddata = async() =>{
    const url= "https://www.anapioficeandfire.com/api/books";
    const res= await fetch(url);
    const data=await res.json();
    //console.log(data);
    for(let i=0;i<=9;i++)
{
   // let str=data[i].characters;
    //let res=str.slice(0,8);
    let display=data[i].name +" \n" + data[i].isbn +"\n"+ data[i].authors+"\n"+data[i].numberOfPages+"\n"+data[i].publisher+"\n"+data[i].released+"\n"+data[i].characters.slice(0,5);

    console.log(display);
}
}
loaddata();

