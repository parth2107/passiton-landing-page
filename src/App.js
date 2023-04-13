
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Unlock a World of Knowledge with PassItOn"
        description="The ultimate asset sharing platform designed to make academic and professional resources accessible to everyone, everywhere."
        showBtn
        mockupImg={assets.iPhone14_1}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of asset sharing platform. Smooth constant colors of a fluent UI design."
        mockupImg={assets.iPhone14_4}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="PassItOn is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.iPhone14_3}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app simplifies the process of buying and selling educational resources by providing a streamlined and secure platform."
        mockupImg={assets.iPhone14_2}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">TeamBits</span>
        </p>
      </div>
    </>
  );
}

export default App;
