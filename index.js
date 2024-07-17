const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  function fixSentence(sentence){
    const sentenceArray = sentence.split(' ')
    const UpperArray = sentenceArray.map((element) => element[0].toUpperCase()+element.slice(1,element.length))
    console.log(UpperArray.join(" "))
    return UpperArray.join(" ")
  }
  return tutorials.map((element) => fixSentence(element))
}

//need to iterate through each element of the tutorials array
//within each element iterate through all of the words

//capitalize letters of a sentence
