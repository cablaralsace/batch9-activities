var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]


var list = document.querySelector ("#league");

for (var i=0; i<justiceLeague.length; i++) {

    var newList = document.createElement("li");
    newList.textContent = 'Superhero: ' + justiceLeague[i].name + ', ' + 'Superpower: ' + justiceLeague[i].superpower;

    list.append(newList);
}
