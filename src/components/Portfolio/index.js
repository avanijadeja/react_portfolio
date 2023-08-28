//  import react
import React from "react";
// import project index file
import Project from "../Project/index";
// import all images from Assets images
import BarkBook from "../../assets/images/BarkBook.png";
import BookStoreGQL from "../../assets/images/BookStoreGQL.png";
import Parkitivities from "../../assets/images/Parkitivities.png";
import TechBlog from "../../assets/images/TechBlog.png";
import Ecommerceshop from "../../assets/images/Ecommerceshop.png";
import DreamLand from "../../assets/images/DreamLand.png";

//  Created seed for projects in data array
const data = [
  {
    id: 1,
    name: "DreamLand WonderLand",
    image: DreamLand,
    github: "https://github.com/avanijadeja/DreamLand-WonderLand",
    deploy: "https://arcane-spire-25027-6f1b8d854313.herokuapp.com/",
    description:
      "Dreamland wonderland is e-commerce website for organic Pajamas designed for Baby, kids and adults.",
    topics: "MERN,State,Redux",
  },
  {
    id: 2,
    name: "Bark Book",
    image: BarkBook,
    github: "https://github.com/avanijadeja/BarkBook",
    deploy: "https://barkbook-2-8fb5fde6f147.herokuapp.com/",
    description:
      "BarkBook is a application in which user can see all groomers and add comments on groomer about their pet's service.",
    topics: "Express,Sequelize",
  },
  {
    id: 3,
    name: "BookStore GraphQL",
    image: BookStoreGQL,
    github: "https://github.com/avanijadeja/BookStoreGQL",
    deploy: "https://frozen-mountain-60263-d07f2d628798.herokuapp.com/",
    description:
      "Book Store GQL search for new books to read, keep a list of books to purchase and delete books from purchase list using graphQL.",
    topics: "MongoDB,Graphql",
  },
  {
    id: 4,
    name: "Parkitivities",
    image: Parkitivities,
    github: "https://github.com/avanijadeja/Parktivities",
    deploy: "https://avanijadeja.github.io/Parktivities/",
    description:
      "Parktivities is used to find national parks and their respective activities.",
    topics: "Javascript Bootstrap",
  },
  {
    id: 5,
    name: "E-commerce-shop",
    image: Ecommerceshop,
    github: "https://github.com/avanijadeja/E-commerce-shop",
    deploy: "https://scenic-death-valley-72867-8012c567f6fe.herokuapp.com/",
    description: "e-commerce-shop uses Redux to manage global state.",
    topics: "Redux,Mongodb,express,GraphQL",
  },
  {
    id: 6,
    name: "TechBlog",
    image: TechBlog,
    github: "https://github.com/avanijadeja/tech-blog",
    deploy: "https://techblog-11-55e6b22819fa.herokuapp.com/",
    description:
      "Tech Blog is a CMS-style blog site similar to a Wordpress site.",
    topics: "express,handlebars,sql,sequelize",
  },
];

function Portfolio() {
  return (
    // declaring Fragment <> to cover all elements - React return one html element if more than element return cover with fragment element
    <>
      <h1>Portfolio</h1>
      <div className="portfolio" id="portfolio">
        {/* using map repeat every seed in data array */}
        {data.map((item, i) => {
          return (
            // called project pass values
            <Project
              key={item.id}
              name={item.name}
              image={item.image}
              github={item.github}
              deploy={item.deploy}
              description={item.description}
              topics={item.topics}
            />
          );
        })}
      </div>
    </>
  );
}

// export function Portfolio
export default Portfolio;
