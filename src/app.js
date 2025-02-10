let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for(let i = 0; i < pronoun.length; i ++){
    for(let m = 0; m < adj.length; m++){
        for(let n = 0; n < noun.length; n++){
            console.log(pronoun[i] + adj[m] + noun[n] + ".com")
            console.log(pronoun[i] + adj[m] + noun[n] + ".net")
            console.log(pronoun[i] + adj[m] + noun[n] + ".us")
            console.log(pronoun[i] + adj[m] + noun[n] + ".io")
        }
    }
}