import styles from "./App.module.css";
import { Certificate } from "./components/Certificate/Certificate";
import { Contact } from "./components/Contact/Contact";
import { Badges } from "./components/Badges/Badges";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Certificate />
      <Badges />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
