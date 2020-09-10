// add solution here

function theBeatlesPlay(musicians, instruments){
  const array=[];
  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  let i = 0;
  const newArray=[];
  while(i<facts.length){
    newArray.push(`${facts[i]}` + "!!!");
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(number){
  let i = 0;
  const array=[];
  function incrementVariable(){
   i = i + 1;
    
  }do{
    array.push("I love the Beatles!");
  }while(number<15);
  i++
  return array;
}

