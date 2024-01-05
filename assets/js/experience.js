AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Developer 2",
    cardImage: "assets/images/experience-page/jpmc.jpeg",
    place: "JP Morgan Chase & Co.",
    time: "(June, 2022 - present)",
    desp: "<li>Successfully implemented optimizations to significantly reduce build times, enhancing overall system efficiency and accelerating the software delivery pipeline.</li><li>Collaborated with cross-functional teams to identify bottlenecks in the CI/CD process and implemented targeted improvements, resulting in streamlined workflows and increased productivity.</li><li>Played a key role in the evaluation and adoption of new technologies and methodologies to further enhance the CI/CD system's capabilities and maintain alignment with industry best practices.</li><li>Actively participated in troubleshooting and resolving issues related to the CI/CD pipeline, ensuring continuous system availability and reliability.</li>",
  },
  {
    title: "Member of Technical Staff",
    cardImage: "assets/images/experience-page/oracle.jpg",
    place: "Oracle",
    time: "(Mar,2021 - May, 2022)",
    desp: "<li>Conducted thorough requirement analysis, participated in architectural design, and created design pages for assigned features.</li><li>Played a vital role in finalizing the architecture for the assigned features, conducting POCs, implementing features, testing functionality, and ensuring timely delivery to the client.</li><li>Demonstrated expertise in utilizing cutting-edge technologies, including Spring Boot, Docker, Kubernetes, HELM, and Microservices, contributing to the robustness and efficiency of the project.</li><li>Developed and implemented an efficient data collector, orchestrating the seamless retrieval of server-running pod data and application logs. Streamlined the process of writing log files, subsequently facilitating the integration of these files into Prometheus and Grafana for comprehensive data analysis.</li><li>Spearheaded the implementation of a robust pod protection feature, safeguarding against potential disruptions caused by increased traffic post-horizontal scaling. This initiative ensured optimal performance and resilience in the face of varying workload demands.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/mindtree.jpg",
    place: "Mindtree Limited",
    time: "(Feb, 2018 - Feb, 2021)",
    desp: "<li>Demonstrated leadership by taking full ownership of critical modules, including Payment, Banking, Revenue, and BOD/EOD, contributing to successful implementation and functionality.</li><li>Played a key role in the design and implementation of Microservices Architecture, contributing to the overall efficiency and scalability of the system.</li><li>Developed and implemented multiple Restful web services using Java and Spring Boot, ensuring robust and scalable solutions.</li><li>Actively participated in decision-making activities related to technology selection and implementation strategies.</li><li>Successfully orchestrated the migration of 50 TB of data encompassing 15 brands from on-premise servers to the cloud, seamlessly integrating it into Adobe AEM.</li><li>Applied Agile methodologies to streamline development processes, fostering adaptability and efficiency within the team.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Outstanding Performer Award",
    cardImage: "assets/images/experience-page/award.png",
    description:
      "Recipient of the 'Outstanding Performer Award' for a year 2018-19.",
  },
  {
    title: "Innovation Excellence Award",
    cardImage: "assets/images/experience-page/innovation.jpg",
    description:
      "Recognize with 'HATS OFF' twice, 'A-TEAM' twice, and awards for 'ACCOUNTABILITY' and 'INFLUENCING' for innovative ideas, expert thinking, and successful migration of 20 brands, demonstrating excellence in quality and adherence to schedules.",
  },
  {
    title: "Certification of Appreciation",
    cardImage: "assets/images/experience-page/certification.jpg",
    description:
      "Acknowledge with a 'Certification of Appreciation' for contributing to customer delight and achieving a perfect score of 7/7 in PFS (Project Feedback Survey Q1 2020-21).",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Time Management",
    subtitle: "",
    image: "assets/images/experience-page/time.jpg",
    desp: "Priorities essential tasks to prevent last-minute rushes and sets deadlines that ensure the timely achievement of milestones.",
    href: "",
  },
  {
    title: "Adaptability",
    subtitle: "",
    image: "assets/images/experience-page/adapt.jpg",
    desp: "Quick learner with a demonstrated ability to pick up new programming languages and skills.",
    href: "",
  },
  {
    title: "Accountablity",
    subtitle: "",
    image: "assets/images/experience-page/account.png",
    desp: "I take ownership of my mistakes. By doing that, I learn what I did wrong so that it does not happen again.",
    href: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
         <!-- <span class="blog-slider__code">${subtitle}</span> -->
          <div class="blog-slider__text">${desp}</div>
        <!--  <a href="${href}" class="blog-slider__button">Read More</a>   -->
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
