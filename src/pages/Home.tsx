import FirstPage from "./HomeFirstLandProfile"
import SecondPage from "./HomePage_2"
import Intro from "./Intro"
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
        <Helmet>
        <title>Home</title>
        <meta name="description" content="Learn more about us on the Home page." />
          <link rel="icon" href="/favicons/home_Icon.png" />
          <meta name="theme-color" content="#181a24" />
        </Helmet>
      <Intro />
      <FirstPage />
      <SecondPage />
    </>
  );
};

export default Home;
