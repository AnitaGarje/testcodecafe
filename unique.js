/*var xmlhttp = new XMLHttpRequest();
var url1 = "compilerlangimage.json";
var myArr1=[];
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         myArr1 = JSON.parse(this.responseText);
        //myFunction1(myArr1);
    }
};

xmlhttp.open("GET", url1, true);
xmlhttp.send();
/*function myFunction1(imagedata)
{
    console.log(imagedata);
}*/

//document.write('<script src="complier.js"></script>');
var xmlhttp = new XMLHttpRequest();
var url = "http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions&page=1";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        // Put the object into storage
        localStorage.setItem('myArr', JSON.stringify(myArr));

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('myArr');
        var passArray=JSON.parse(retrievedObject);

        myFunction(passArray); // call the function
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(data) {

var out="";
var out1="";
var out2="";
var out3="";
var out4="";
//console.log(data);
var uniqueNames = [];
var uniuetitle=[];
var uniquelevel=[];
var i;
var datalen=data.websites.length;
for(i = 0; i<datalen ; i++){ 
    if(uniqueNames.indexOf(data.websites[i].language) === -1){
        uniqueNames.push(data.websites[i].language);        
    } 
    if(uniuetitle.indexOf(data.websites[i].title) === -1){
        uniuetitle.push(data.websites[i].title);        
    }
    if(uniquelevel.indexOf(data.websites[i].metadata.level) === -1){
        uniquelevel.push(data.websites[i].metadata.level);        
    }       
}
//console.log(uniquelevel);
function getrankcnt(data1,unique1,ch)
{
    var cnt=0;
    var rank1=[];
    var unilen=unique1.length;
    for(var i = 0; i< unilen; i++)
    {    
        //alert(uniqueNames[i]);  
        for( var j=0;j <datalen;j++)  
        {
        	if(ch==1)
        	{
    	    	if(unique1[i]==data1.websites[j].language)
    	    	{
    	    		cnt++;
    	    	}
        	}
        	if(ch==2)
        	{
    	    	if(unique1[i]==data1.websites[j].title)
    	    	{
    	    		cnt++;
    	    	}
        	}
        	if(ch==3)
        	{
    	    	if(unique1[i]==data1.websites[j].metadata.level)
    	    	{
    	    		cnt++;
    	    	}
        	}
        }  
        //var Obj={unique1[i],cnt};
        rank1.push({property:unique1[i],count:cnt});
        cnt=0;
        //console.log(rank);
    }

    //sort array as per decending order of cnt and then return it
    rank1.sort(function(a, b){return b.count - a.count});
    return rank1;
} //fun ends getrankcnt


//get cnt of top 5 lang
var rank=[];
rank=getrankcnt(data,uniqueNames,1);

//get cnt of top 2 sub
var ranktitle=[];
ranktitle=getrankcnt(data,uniuetitle,2);

//get cnt of levels 
var ranklevel=[];
ranklevel=getrankcnt(data,uniquelevel,3);


//display  of top 5 lang
var ranklen=rank.length;
if(ranklen>5)
{
	ranklen=5
}
for(var i=0;i<ranklen;i++)
{
	 out += '<li class="list-group-item">' + rank[i].property + '<span class="badge">' +
        rank[i].count + '</span></li>';
}
document.getElementById("toplang").innerHTML = out;


//display  of top 2 sub
var ranklen=ranktitle.length;
if(ranklen>2)
{
	ranklen=2
}
for(var i=0;i<ranklen;i++)
{
	 out1 += '<li class="list-group-item">' + ranktitle[i].property + '<span class="badge">' +
        ranktitle[i].count + '</span></li>';
}
document.getElementById("top2title").innerHTML = out1;


//display all levels
for(var i=0;i<ranklevel.length;i++)
{
	 out2 += '<li class="list-group-item">' + ranklevel[i].property + '<span class="badge">' +
        ranklevel[i].count + '</span></li>';
}
document.getElementById("level").innerHTML = out2;


// display total num of sub
out3 += '<li class="list-group-item">' + "Total Submissions" + '<span class="badge">' +
        data.websites.length + '</span></li>'
document.getElementById("sub").innerHTML =out3 ;



//to get img
          //  console.log(myArr1);
/*for(var i=0;i<data.websites.length;i++)
{
       for(var j=0;j<myArr1.length;j++)
       {
        if(data.websites[i].language==myArr1[j].language)
        {
            out4+='<img class="img-responsive" src="'+ myArr1[j].icon +'" alt="icon">';
            //console.log(out4);
             document.getElementById("compiler").innerHTML=out4;
        }
        
        }
   
}*/
}
