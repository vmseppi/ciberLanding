import "./App.css";
import Header from "./components/Header/Header";
import WhatIs from "./components/WhatIs/WhatIs";
import WhatYouWillLearn from "./components/WhatYouWillLearn/WhatYouWillLearn";
import FormSection from "./components/Form/FormSection";
import BannerSection from "./components/BannerSection/BannerSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App container-max">
      <Header />
      <WhatIs />
      <WhatYouWillLearn />
      <FormSection />
      <BannerSection />
      <Footer />
    </div>
  );
}

export default App;
