import React from "react";
import styles from "./Certificate.module.css";

// Import images if they are in the 'src' directory
import certificate1 from "/assets/certificate/certificates/certificate1.png";
import foundationsOfDataScience from "/assets/certificate/certificates/foundationsOfDataScience.png";
import DataAnalytics from "/assets/certificate/certificates/DataAnalytics.png";
import supervisedMachineLearning from "/assets/certificate/certificates/supervisedMachineLearning_with_logisticRegression.png";
import machinelearning from "/assets/certificate/certificates/machinelearning.png";
import basicsOfMachineLearning from "/assets/certificate/certificates/basicsOfMachineLearning.png";
import ProbabilityAndProbabilityDistributionML from "/assets/certificate/certificates/Probability_and_probability_distributionML.png";
import statForML from "/assets/certificate/certificates/stat_forML.png";
import pythonForDataScience from "/assets/certificate/certificates/pythonFor_DataScience.png";
import ML_modelDeploy_usingFlask from "/assets/certificate/certificates/MLmodel_deployment_usingFlask.png";
import AI_ML from "/assets/certificate/certificates/AI_ML_slit.png";
import AI_ML2 from "/assets/certificate/certificates/AI_ML2_slit.png";
import IntroToDeepLearning from "/assets/certificate/certificates/intrTODeepLearning.png";

export const Certificate = () => {
  const certificates = [
   
    {
      src: DataAnalytics,
      alt: "Certificate 3",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/AJ45UA7UGP9X"
    }
    ,
    {
      src: AI_ML,
      alt: "Certificate 11",
      link: "https://code.sliit.org/certificates/8g5yogcerp"
    },
    {
      src: AI_ML2,
      alt: "Certificate 12",
      link: "https://code.sliit.org/certificates/hhgh3rhmv8"
    }
    ,
    {
      src: certificate1,
      alt: "Certificate 1",
      link: "https://link-to-certificate1.com"
    }
    ,
    {
      src: IntroToDeepLearning,
      alt: "Certificate 13",
      link: "https://www.kaggle.com/learn/certification/shamindakanchana/intro-to-deep-learning"
    }
    ,
    {
      src: foundationsOfDataScience,
      alt: "Certificate 2",
      link: "https://www.coursera.org/account/accomplishments/certificate/8WZW6QFNFEJL"
    },
   
    {
      src: supervisedMachineLearning,
      alt: "Certificate 4",
      link: "https://olympus.mygreatlearning.com/courses/33273/certificate"
    },
    {
      src: machinelearning,
      alt: "Certificate 5",
      link: "https://olympus.mygreatlearning.com/courses/57914/certificate"
    },
    {
      src: basicsOfMachineLearning,
      alt: "Certificate 6",
      link: "https://olympus.mygreatlearning.com/courses/57914/certificate"
    },
    {
      src: ProbabilityAndProbabilityDistributionML,
      alt: "Certificate 7",
      link: "https://olympus.mygreatlearning.com/courses/34995/certificate"
    },
    {
      src: statForML,
      alt: "Certificate 8",
      link: "https://olympus.mygreatlearning.com/courses/10901/certificate"
    },
    {
      src: pythonForDataScience,
      alt: "Certificate 9",
      link: "https://olympus.mygreatlearning.com/courses/47916/certificate"
    },

    {
      src: ML_modelDeploy_usingFlask,
      alt: "Certificate 10",
      link: "https://olympus.mygreatlearning.com/courses/47894/certificate"
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
