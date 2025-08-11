function BuildSentance(subject,verb,object="Statement"){
return subject +verb + object;
}

let Sentence=BuildSentance("maths","solving")
console.log(Sentence);