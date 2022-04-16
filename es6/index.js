//// let b = Array.from(expensess.keys())
// console.log(b);


// const reverse = (array)=>{
//     var output = [];
//     for (var i = array.length - 1; i> -1; i--){
//         output.push(array[i]);
//     }

//     return output;
// }

// const asss = reverse(expensess);

//=============================================================



// const customReverse = (arr)=>{

// 	const arrLength = arr.length;
//     // console.log(arrLength);
// 	const cArr = [];

// 	for(let i=arrLength-1; i> -1; i--){
    
// 		// console.log(i);

// 		 cArr.push(arr[i]);
// 	}

// 	return cArr;

// }




// const abc = customReverse(arr);
// console.log(abc);

// console.log(arr.reverse());

let arr = ["mongo","node","reactjs","nextjs"];

//const ar1 = arr.filter(item=>item !== "reactjs");

// const ar1 = arr.filter((item)=>{

// if(item !== "mongo"){

// 	return item;
// }

// })

 arr = arr.filter(item=>item !== "reactjs"); // const arr show the error



console.log(arr);