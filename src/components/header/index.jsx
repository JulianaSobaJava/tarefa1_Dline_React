import { NavLinkItem } from "./navLinkList";
import "./header.scss";

// import { Container } from './styles';

export default function Header() {
  return (
    <header>
      <strong>
        Dline<span>Code</span>
      </strong>
      <nav>
        <ul>
          {NavLinkItem.map((item) => (
            <li key={item.id}>{item.tittle}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
