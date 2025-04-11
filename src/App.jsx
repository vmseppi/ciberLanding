import "./App.css";
import Header from "./components/header/Header";
import WhatIs from "./components/WhatIs/WhatIs";
import WhatYouWillLearn from "./components/WhatYouWillLearn/WhatYouWillLearn";

function App() {
  return (
    <div className="App container-max">
      <Header />
      <WhatIs />
      <WhatYouWillLearn />
    </div>
  );
}

export default App;
