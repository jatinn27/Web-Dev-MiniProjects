const reviews = [
  {
    id: 1,
    name: "Susan smith",
    job: "Web developer",
    img: "./imgs/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna johnson",
    job: "Web designer",
    img: "./imgs/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter jones",
    job: "Intern",
    img: "./imgs/person-3.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill anderson",
    job: "The boss",
    img: "./imgs/person-4.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currentItem = 0;

function showPerson(){
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    jobb.textContent = item.job;
    Wsaid.textContent = item.text;
}

addEventListener('DOMContentLoaded',function(){
    showPerson();
})

nextbtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem> reviews.length -1){
        currentItem = 0;
    }
    showPerson();
})

prevbtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length -1;
    }
    showPerson();
})
