

    let pronoun = ['Mygit ', 'The','Our', 'Your'];
    let adjective = ['great','stinky', 'shitty', 'odd'];
    let noun = ['website', 'hole', 'armpit', 'idea'];
    let extensions = ['.com', '.org', '.edu', '.cl'];


let generateDomain = () =>{
    for (let i = 0; i< pronoun.length; i++){
        for (let x = 0; x< adjective.length; x++){
            for (let y =0; y < noun.length; y++ ){
                for (let z = 0; z < extensions.length; z++){
                     console.log(pronoun[i] + adjective[x] + noun[y] + extensions[z]); 
                };
            };
        };
    };
};

generateDomain();
