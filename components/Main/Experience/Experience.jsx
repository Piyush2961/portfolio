import React, { useState } from "react";
import styles from "./Experience.module.css";
import Image from "next/image";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Software Engineer",
      employmentType: "Full-time",
      company: "Majid Al Futtaim",
      startDate: "1 July 2023",
      endDate: "Present",
      description: [
        "Experienced Backend Developer specializing in the Payments domain, with a proven track record of successfully integrating diverse payment gateways, including Checkout.com, Valu, and Cybersource. Proficient in designing and implementing microservice architecture using Java Spring Boot, contributing to the development of various microservices.",
        "Demonstrated expertise in leveraging Azure cloud services, such as Azure Service Bus, Azure Blob Storage, and Azure Key Vault, to enhance system functionality and security. Committed to delivering high-quality solutions in the dynamic field of payment processing. Passionate about staying at the forefront of technological advancements and consistently seeking opportunities for professional growth.",
      ],
      image: "/maf.jpeg",
      companyWebsite:
        "https://www.linkedin.com/company/majid-al-futtaim/mycompany/verification/",
      location: "Gurugram, Haryana, India",
      skills: "Java , SpringBoot , Microsoft Azure , MySql ",
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      employmentType: "Internship",
      company: "Majid Al Futtaim",
      startDate: "1 March 2022",
      endDate: "30 June 2023",
      description: [
        "Began my journey in the tech industry as a valuable member of the Search Team, where I honed my skills using Node.js and Express.js. During this time, I contributed to developing efficient and responsive solutions for search functionalities.",
        "Transitioned seamlessly into the Payments Team, embracing Java Spring Boot as the primary technology stack. Initiated my tenure by successfully implementing a cronjob in Hybris, laying the foundation for subsequent projects. Evolved further by diving into the intricacies of microservices architecture, ultimately integrating various third-party payment gateways for a comprehensive and seamless payment processing experience.",
      ],
      image: "/maf.jpeg",
      companyWebsite:
        "https://www.linkedin.com/company/majid-al-futtaim/mycompany/verification/",
      location: "Gurugram, Haryana, India",
      skills:
        "Node JS, Express JS, Java , SpringBoot , Microsoft Azure , MySql ",
    },
    {
      id: 3,
      title: "Web Developer Intern",
      employmentType: "Internship",
      company: "StockPe",
      startDate: "12 November 2022",
      endDate: "25 January 2023",
      description: [
        "Proudly contributed to the creation of an Admin Panel, a pivotal component for managing and hosting tournaments across StockPe. Leveraged the power of React.js to design and develop a user-friendly interface, ensuring seamless navigation and optimal user experience.",
        "Empowered administrators with the ability to perform CRUD (Create, Read, Update, Delete) operations effortlessly within the Admin Panel. This central hub plays a crucial role in orchestrating tournaments, making it a key asset for those overseeing StockPe activities. Excited about the impact and possibilities this project brings to StockPe.",
      ],
      image: "/stockpe.jpeg",
      companyWebsite: "https://www.linkedin.com/company/stockpe/",
      location: "Remote, India",
      skills: "React JS, Google Analytics, CSS, JavaScript",
    },

    {
      id: 4,
      title: "Web Developer Intern",
      employmentType: "Internship",
      company: "Admere Selvyn",
      startDate: "8 October 2021",
      endDate: "1 November 2021",
      description: [
        "Contributed my skills as a Frontend Web Developer at Admere Selvyn, where I took the lead in crafting a responsive website for the company using React.js. This project involved implementing modern web design principles to enhance user experience and ensure accessibility across various devices.",
        "Notably, played a pivotal role in developing and maintaining the main hosted website for Admere Selvyn. Excited to have been part of a team driving the company's online presence and showcasing its offerings to the digital world. Looking forward to leveraging my frontend expertise for future impactful projects.",
      ],
      image: "/admere.jpeg",
      companyWebsite: "https://www.linkedin.com/company/admereforartist/",
      location: "Remote, India",
      skills: "React JS, CSS, HTML, JavaScript",
    },
  ]);

  const getMonthsAndYear = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return years === 0
      ? `${remainingMonths} months`
      : `${years} years ${remainingMonths} months`;
  };

  const handleCompanyImageClick = (companyWebsite) => {
    window.open(companyWebsite, "_blank");
  };

  const getRandomColor = () => {
    const colors = [
      "#2596be",
      "#311492",
      "#781492",
      "#921454",
      "#670918",
      "#544a49",
      "#352f23",
      "#21461c",
      "#15420f",
      "#1f423a",
      "#1f2e42",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={styles.experienceSection}>
      <h2 className={styles.experience}>Experience</h2>
      {experiences.map((experience) => (
        <>
          <div key={experience.id} className={styles.experienceItem}>
            <div className={styles.companyAndImage}>
              <div
                className={styles.companyImage}
                onClick={() =>
                  handleCompanyImageClick(experience.companyWebsite)
                }
              >
                <Image src={experience.image} alt="me" width="80" height="80" />
              </div>

              <div className={styles.designationAndMonths}>
                <span
                  className={styles.designation}
                  onClick={() =>
                    handleCompanyImageClick(experience.companyWebsite)
                  }
                >
                  {experience.title}{" "}
                </span>
                <span className={styles.dateBelowDesignation}>
                  {getMonthsAndYear(experience.startDate, experience.endDate)}
                </span>
              </div>
            </div>

            <div className={styles.companyNameAndTimePeriod}>
              <strong
                onClick={() =>
                  handleCompanyImageClick(experience.companyWebsite)
                }
              >
                {experience.company}
              </strong>{" "}
              | {experience.startDate} - {experience.endDate}
            </div>

            <span className={styles.location}> 📍 {experience.location} </span>
            <span
              className={styles.employmentType}
              style={{
                backgroundColor:
                  experience.employmentType === "Full-time"
                    ? "#00b894"
                    : "#ff7675",
                display: "inline-block",
              }}
            >
              {experience.employmentType}
            </span>

            <div>
              {experience.description.map((desc) => (
                <p key={experience.id} className={styles.description}>
                  {desc}
                </p>
              ))}
            </div>

            <div className={styles.skillsDiv}>
              <div className={styles.skillsHeadingDiv}>
                <span className={styles.skillsHeading}> Skills : </span>
              </div>
              <div className={styles.skillsMapDiv}>
                {experience.skills.split(",").map((skill) => (
                  <span
                    key={experience.id}
                    className={styles.skill}
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {experience.id === experiences.length ? null : (
            <div className={styles.divBorderLine}></div>
          )}
        </>
      ))}
    </div>
  );
};

export default ExperienceSection;
