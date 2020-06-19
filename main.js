// GROUP Alicia Williams, Sam Campbell, Jack Polson, Erin Mehaffey

const mainElement = document.querySelector('.katas-lists')


//KATA 1
const kata1Heading = document.createElement('h2')
mainElement.append(kata1Heading)
kata1Heading.append('Kata 1')


// KATA 1 p
const kata1P = document.createElement('p')
mainElement.append(kata1P)
for (let counter = 0; counter <= 20; counter ++){
    if(counter <= 19){
    kata1P.append(counter +',')}else{
        kata1P.append(counter)}
    }



    //KATA 2
const kata2Heading = document.createElement('h2')
mainElement.append(kata2Heading)
kata2Heading.append('Kata 2')

// KATA 2 p
const kata2P = document.createElement('p')
mainElement.append(kata2P)
for (let counter = 2; counter <= 20; counter += 2){
    if(counter <= 19){
    kata2P.append(counter +',')}else{
        kata2P.append(counter)}
    }


//KATA 3
const kata3Heading = document.createElement('h2')
mainElement.append(kata3Heading)
kata3Heading.append('Kata 3')


// KATA 3 p
const kata3P = document.createElement('p')
mainElement.append(kata3P)
for (let counter = 1; counter <= 19; counter += 2){
    if(counter <= 19){
    kata3P.append(counter +',')}else{
        kata3P.append(counter)}
    }


 
//KATA 4
const kata4Heading = document.createElement('h2')
mainElement.append(kata4Heading)
kata4Heading.append('Kata 4')   



// KATA 4 p
const kata4P = document.createElement('p')
mainElement.append(kata4P)
for (let counter = 5; counter <= 100; counter += 5){
    if(counter <= 100){
    kata4P.append(counter +',')}else{
        kata4P.append(counter)}
    }


   
 
//KATA 5 heading
const kata5heading=document.createElement('h2')
mainElement.append(kata5heading)
kata5heading.append('Kata 5')
// KATA 5 p
const kata5P=document.createElement('p')
mainElement.append(kata5P)
let array=[]                                                       
for(let counter=1; counter <=100; counter +=1)
{
  const counterIsPerfectSquare=Number.isInteger(Math.sqrt(counter))
  if(counterIsPerfectSquare){
      array.push(counter)
       }

    
        }
 kata5P.append(array.join(','))



    //KATA 6
const kata6Heading = document.createElement('h2')
mainElement.append(kata6Heading)
kata6Heading.append('Kata 6')    


// KATA 6 p
const kata6P = document.createElement('p')
mainElement.append(kata6P)
for (let counter = 20; counter >= 1; counter -= 1){
    if(counter >= 1){
    kata6P.append(counter +',')}else{
        kata6P.append(counter)}
    }


  

    //KATA 7
const kata7Heading = document.createElement('h2')
mainElement.append(kata7Heading)
kata7Heading.append('Kata 7')    



// KATA 7 p
const kata7P = document.createElement('p')
mainElement.append(kata7P)
for (let counter = 20; counter >= 2; counter -= 2){
    if(counter >= 2){
    kata7P.append(counter +',')}else{
        kata7P.append(counter)}
    }


//KATA 8
const kata8Heading = document.createElement('h2')
mainElement.append(kata8Heading)
kata8Heading.append('Kata 8')    


// KATA 8 p
const kata8P = document.createElement('p')
mainElement.append(kata8P)
for (let counter = 19; counter >= 3; counter -= 2){
    if(counter >= 3){
    kata8P.append(counter +',')}else{
        kata8P.append(counter)}
    }



//KATA 9
const kata9Heading = document.createElement('h2')
mainElement.append(kata9Heading)
kata9Heading.append('Kata 9')    




// KATA 9 p
const kata9P = document.createElement('p')
mainElement.append(kata9P)
for (let counter = 100; counter >= 5; counter -= 5){
    if(counter >= 5){
    kata9P.append(counter +',')}else{
        kata9P.append(counter)}
    }



//KATA 10 heading
const kata10heading=document.createElement('h2')
mainElement.append(kata10heading)
kata10heading.append('Kata 10')
// KATA 10 p
const kata10P=document.createElement('p')
mainElement.append(kata10P)
let array2=[]
for(let counter = 100; counter >= 1; counter -= 1)
{
  const counterIsPerfectSquare=Number.isInteger(Math.sqrt(counter))
  if(counterIsPerfectSquare){
      array2.push(counter)
       }

    
        }
 kata10P.append(array2.join(','))

    

//KATA 11
const kata11Heading = document.createElement('h2')
mainElement.append(kata11Heading)
kata11Heading.append('Kata 11')    


// KATA 11 P
const kata11P = document.createElement('p')
mainElement.append(kata11P)
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]
kata11P.append(sampleArray)



//KATA 12
const kata12Heading = document.createElement('h2')
mainElement.append(kata12Heading)
kata12Heading.append('Kata 12')    


// KATA 12 P
const kata12P = document.createElement('p')
mainElement.append(kata12P)
let evenArray = []
let oddArray = []
for(let position = 0; position < sampleArray.length; position += 1){
    let possibleNumber = sampleArray[position]
    if(possibleNumber%2 == 0){
        evenArray.push(possibleNumber)
    } else {
        oddArray.push(possibleNumber)
    }
}
kata12P.append(evenArray)



//KATA 13
const kata13Heading = document.createElement('h2')
mainElement.append(kata13Heading)
kata13Heading.append('Kata 13')    


// KATA 13 P
const kata13P = document.createElement('p')
mainElement.append(kata13P)
let evenArray2 = []
let oddArray2 = []
for(let position = 0; position < sampleArray.length; position += 1){
    let possibleNumber = sampleArray[position]
    if(possibleNumber%2 == 0){
        evenArray2.push(possibleNumber)
    } else {
        oddArray2.push(possibleNumber)
    }
}
kata13P.append(oddArray2)


//KATA 14
const kata14Heading = document.createElement('h2')
mainElement.append(kata14Heading)
kata14Heading.append('Kata 14')    

// KATA 14 P
const kata14P = document.createElement('p')
mainElement.append(kata14P)
let squareArray = []
for(index = 0; index < sampleArray.length; index += 1){
    let possibleNumber = sampleArray[index]
    let squaredNumber = possibleNumber * possibleNumber
    squareArray.push(squaredNumber)
}
kata14P.append(squareArray)


//KATA 15
const kata15Heading = document.createElement('h2')
mainElement.append(kata15Heading)
kata15Heading.append('Kata 15')   

// KATA 15 P
const kata15P = document.createElement('p')
mainElement.append(kata15P)
let sumArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let sum = 0
for(let index = 0; index < sumArray.length; index += 1){
    sum += sumArray[index]
}
kata15P.append(sum)

//KATA 16
const kata16Heading = document.createElement('h2')
mainElement.append(kata16Heading)
kata16Heading.append('Kata 16')  


// KATA 16 P
const kata16P = document.createElement('p')
mainElement.append(kata16P)
let sum2 = 0
for(let index = 0; index < sampleArray.length; index += 1){
    sum2 += sampleArray[index]
}
kata16P.append(sum2)



//KATA 17
const kata17Heading = document.createElement('h2')
mainElement.append(kata17Heading)
kata17Heading.append('Kata 17')  



// KATA 17 P
const kata17P = document.createElement('p')
mainElement.append(kata17P)
let smallNumber =  Math.min(...sampleArray)

kata17P.append(smallNumber)

//KATA 18
const kata18Heading = document.createElement('h2')
mainElement.append(kata18Heading)
kata18Heading.append('Kata 18')  



// KATA 18 P
const kata18P = document.createElement('p')
mainElement.append(kata18P)
let bigNumber =  Math.max(...sampleArray)

kata18P.append(bigNumber)