
var string=" ";

function adjective(first,second,third) {
    let num=Math.floor(Math.random()*3);
    
    switch(num){
        case 0:
             return first;
        case 1:
              return second;
        case 2:
              return third;
    }

    return first;
}

function shop_name(first,second,third) {
    let num=Math.floor(Math.random()*3);
    
    switch(num){
        case 0:
             return first;
        case 1:
              return second;
        case 2:
              return third;
    }

    return first;    
}

function word(first,second,third) {
    let num=Math.floor(Math.random()*3);
    
    switch(num){
        case 0:
             return first;
        case 1:
              return second;
        case 2:
              return third;
    }

    return first;    
}

console.log(adjective("Crazy","Amazing","Fire"),shop_name("Engine","Foods","Garments"),word("Bros","Limited","Hub"));

