// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const example = [4, 1, 1, 6, 1, 5, 5, 6, 4, 8, 2, 3, 2, 7, 2, 5];
const example1 = [4, 2, 1, 6, 9, 0, 0, 7, 1, 7, 0 ,8, 7, 1, 8, 1, 4, 5, 6];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, example, example1];

// Use Luhn algorithm 
const validateCred = arr => {
  //At first I dont wont my 'arr' to be changed so I creale another variable "luhn" with the same meaning as 'arr'
  let luhn = arr.map(element => element);
  //or for example like this
  // for (let i = 0; i < arr.length; i++) {
  //   luhn.push(arr[i])
  // }
  
  //Next we should rewrite(change) every second element from the right to the left of my 'luhn'('arr') so we created a loop with -2 step and make math with them as Luhn said
  for (let i = luhn.length - 2; i >= 0; i = i - 2) {
      luhn[i] = luhn[i] * 2;
      if (luhn[i] >= 10) {
        luhn[i] = luhn[i] - 9;
      } 
    }
//We can summirize using loop too but this method is easy to use.    
  let result = luhn.reduce((a,b) => a + b, 0)
//And at last if the sum divided by 10 has a reminder of 0 then the number is valid
  if ((result % 10) === 0) {
    return true
  } else return false
}

//Next we use loop to know which ones are invalid 
const findInvalidCards = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (validateCred(arr[i]) === false) {
      result.push(arr[i])
    }
  }
  return result
}

//on this stage we try to rename our cardnumbers to card company names 
const idInvalidCardCompanies = cards => {
//this removes dublicates in next switch-case elements
  let result = [...new Set( 
      cards.map(element => { 
    switch (element[0]) {
      case 3:
      return 'Amex (American Express)';
      break;
      case 4:
      return 'Visa';
      break;
      case 5:
      return 'Mastercard';
      break;
      case 6:
      return 	'Discover';
      break;
      deafault: 
      return 'Company not found';
    } 
  })
    )]
  return result

}


