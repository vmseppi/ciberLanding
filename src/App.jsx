import "./App.css";
import Header from "./components/header/Header";
import WhatIs from "./components/WhatIs/WhatIs";
import WhatYouWillLearn from "./components/WhatYouWillLearn/WhatYouWillLearn";
import FormSection from "./components/form/FormSection";

function App() {
  return (
    <div className="App container-max">
      <Header />
      <WhatIs />
      <WhatYouWillLearn />
      <FormSection />
    </div>
  );
}

export default App;
