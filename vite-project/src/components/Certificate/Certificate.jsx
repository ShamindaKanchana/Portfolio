import React from "react";
import styles from "./Certificate.module.css";

export const Certificate = () => {
  const certificates = [
    {
      src: "/assets/certificate/certificates/certificate1.png",
      alt: "Certificate 1",
      link: "https://link-to-certificate1.com"
    },
    {
      src: "/assets/certificate/certificates/foundationsOfDataScience.png",
      alt: "Certificate 2",
      link: "https://www.coursera.org/account/accomplishments/certificate/8WZW6QFNFEJL"
    },
    {
      src: "/assets/certificate/certificates/DataAnalytics.png",
      alt: "Certificate 3",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/AJ45UA7UGP9X"
    }
    ,
    {
      src: "/assets/certificate/certificates/supervisedMachineLearning_with_logisticRegression.png",
      alt: "Certificate 4",
      link: "https://olympus.mygreatlearning.com/courses/33273/certificate"
    },
    {
      src: "/assets/certificate/certificates/machinelearning.png",
      alt: "Certificate 5",
      link: "https://olympus.mygreatlearning.com/courses/57914/certificate"
    },
    {
      src: "/assets/certificate/certificates/basicsOfMachineLearning.png",
      alt: "Certificate 6",
      link: "https://olympus.mygreatlearning.com/courses/57914/certificate"
    }
    ,
    {
      src: "/assets/certificate/certificates/Probability_and_probability_distributionML.png",
      alt: "Certificate 7",
      link: "https://olympus.mygreatlearning.com/courses/34995/certificate"
    }
    ,
    {
      src: "/assets/certificate/certificates/stat_forML.png",
      alt: "Certificate 7",
      link: "https://olympus.mygreatlearning.com/courses/10901/certificate"
    }
    ,
    {
      src: "/assets/certificate/certificates/pythonFor_DataScience.png",
      alt: "Certificate 8",
      link: "https://olympus.mygreatlearning.com/courses/47916/certificate"
    }
    // Add more certificates here as needed
  ];

  return (
    <section className={styles.container} id="certificate">
      <h2 className={styles.title}>Certifications</h2><br />
      <div className={styles.content}>
        <div className={styles.scrollContainer}>
          <div className={styles.gallery}>
            {certificates.map((certificate, index) => (
              <a
                key={index}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateItem}
              >
                <img
                  src={certificate.src}
                  alt={certificate.alt}
                  className={styles.certificateImage}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
