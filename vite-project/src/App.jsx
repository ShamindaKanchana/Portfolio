import styles from "./App.module.css";
import { Certificate } from "./components/Certificate/Certificate";
import { Contact } from "./components/Contact/Contact";

import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Certificate />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
