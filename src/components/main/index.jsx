import Cards from "../cards";
import "./main.scss";

// import { Container } from './styles';

export default function Main() {
  return (
    <main>
      <div className="banner"></div>
      <div className="cardContainer">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </main>
  );
}
