function getRandom(){
    return Math.floor(Math.random() * 300);
};
const authors = [
   { 
       name: "Jordan Lambrecht",
       pictureURL: "/assets/img/headshot_jordan.jpg",
   },
   {
        name: "Bergen Johnston",
        pictureURL: "/assets/img/headshot_bergen.jpg",
   },
   {
        name: "Olivia Boldt",
        pictureURL: "/assets/img/headshot_olivia.jpg",
    },
    {
        name: "Miley Cyrus",
        pictureURL: "/assets/img/headshot_miley.jpg",
   },
   {
       name: "Maria Smal",
       pictureURL: "/assets/img/headshot_maria.jpg",
    },
];
function getRandomAuthor(){
    let whichAuth =  Math.floor(Math.random() * authors.length);
    let thisAuth = authors[whichAuth];
    console.log(thisAuth);
    return authors[whichAuth].name;
};



export default[

    { 
        title: "An Introduction to our Tech Stack",
        date: "August 26, 2021",
        author: authors[1].name,
        authorImg: authors[1].pictureURL,   

    },
    {
        title: "Olivia Boldt: Bol(d)ting Into the Bakery",
        date: "May 1, 2021",
        author: authors[3].name,
        authorImg: authors[3].pictureURL,    
    },
    {
        title: "Pixel Bakery: Creative Direction",
        date: "April 22, 2021",
        author: authors[4].name,
        authorImg: authors[4].pictureURL,    
    },
    {
        title: "Pixel Bakery goes from idea to solution of choice in motion marketing",
        date: "March 31, 2021",
        author: authors[1].name,
        authorImg: authors[1].pictureURL,    
    },
    {
        title: "Gmail: How to Automatically Delete or Archive Emails After A Certain Number of Days",
        date: "July 4, 2020",
        author: authors[0].name,
        authorImg: authors[0].pictureURL,    
    },
]
 