
import "./App.css";
import { Nav,Intro,Iam, Works, Skills, Education, Contact } from "./components/index";
function App() {
  return (
    <div>
      <Nav/>
      <Intro/>
      <Iam />
      <Works />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
