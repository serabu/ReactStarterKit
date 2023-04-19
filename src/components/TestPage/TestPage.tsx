import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { PageBody } from "./PageBody/PageBody";
import "./TestPage.scss";

// TODO: Why do you use this name for page and its component?
export const TestPage = () => {
  return (
    <div className="testPage">
      <Header />     
      <PageBody />
      <Footer />
    </div>
  );
};
