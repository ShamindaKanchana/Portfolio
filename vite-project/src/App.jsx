import styles from "./App.module.css";
import { Certificate } from "./components/Certificate/Certificate";
import { Contact } from "./components/Contact/Contact";
import { Badges } from "./components/Badges/Badges";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Research } from "./components/Research/Research";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Blogs } from "./components/Blogs/Blogs";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Experience />
      <Research />
      <Certificate />
      <Badges />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
