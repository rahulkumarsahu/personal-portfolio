AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage:"assets/images/techstack-page/aws.png",
    langName:"AWS",
    langDesc:"<li>Amazon Web Services (AWS) is a leading cloud computing platform, providing scalable and reliable infrastructure services. With a vast array of offerings, including computing power, storage, and databases, AWS enables businesses to innovate and scale efficiently in the cloud.</li>"
  },
  {
    langImage:"assets/images/techstack-page/docker.png",
    langName:"Docker",
    langDesc:"<li>Docker is a platform that enables developers to automate the deployment of applications inside lightweight, portable containers, allowing for consistent and efficient deployment across various computing environments.</li>"
  },
  {
    langImage:"assets/images/techstack-page/golang.png",
    langName:"Go Lang",
    langDesc:"<li>Go (Golang) is a statically-typed, compiled programming language designed for simplicity, efficiency, and concurrency. Known for its clean syntax and built-in support for concurrent programming, Go is often used in systems development and large-scale distributed applications.</li>"
  },
  {
    langImage:"assets/images/techstack-page/gradle.png",
    langName:"Gradle",
    langDesc:"<li>Gradle is an open-source build automation tool that provides a concise and flexible way to manage projects, automate the build process, and handle dependencies. It uses a Groovy-based domain-specific language (DSL) to define project configurations and tasks, making it powerful and easy to use for building and maintaining software projects.</li>"
  },
  {
    langImage:"assets/images/techstack-page/helm.png",
    langName:"Helm3",
    langDesc:"<li>Helm 3 is a Kubernetes package manager, streamlining the deployment and management of applications on Kubernetes clusters. It simplifies the process of defining, installing, and upgrading applications, enhancing scalability and maintainability for containerized environments.</li>"
  },
  {
    langImage:"assets/images/techstack-page/java.png",
    langName:"Java",
    langDesc:"<li>Java is a versatile, object-oriented programming language known for its platform independence, robustness, and ease of development.</li>"
  },
  {
    langImage:"assets/images/techstack-page/jenkins.png",
    langName:"Jenkins",
    langDesc:"<li>Jenkins is an open-source automation server that facilitates the continuous integration and continuous delivery (CI/CD) of software projects. It automates the building, testing, and deployment processes, allowing developers to streamline and manage their software development workflows efficiently.</li>"
  },
  {
    langImage:"assets/images/techstack-page/Kubernetes.png",
    langName:"Kubernetes",
    langDesc:"<li>Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications, streamlining the process of container orchestration and enhancing the efficiency of cloud-native development and operations.</li>"
  },
  {
    langImage:"assets/images/techstack-page/maven.png",
    langName:"Maven",
    langDesc:"<li>Maven is a powerful and widely-used build automation and project management tool that simplifies the build process, facilitates project documentation, and manages dependencies in Java-based software development projects.</li>"
  },
  {
    langImage:"assets/images/techstack-page/micro.png",
    langName:"Microservices",
    langDesc:"<li>Microservices is an architectural approach where a software application is developed as a collection of small, independent, and loosely coupled services that communicate with each other to perform specific business functions. Each service is designed to be modular, scalable, and independently deployable.</li>"
  },
  {
    langImage:"assets/images/techstack-page/spring.png",
    langName:"Spring Boot",
    langDesc:"<li>Spring Boot is an open-source Java-based framework that simplifies the development of standalone, production-grade Spring-based applications by providing convention-over-configuration and opinionated defaults in a concise, modular, and easily deployable manner.</li>"
  },
  {
    langImage:"assets/images/techstack-page/sql.png",
    langName:"SQL",
    langDesc:"<li>SQL (Structured Query Language) is a domain-specific programming language designed for managing and manipulating relational databases. It allows users to interact with databases by defining, querying, and modifying data, providing a standardized and efficient way to handle database operations.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
