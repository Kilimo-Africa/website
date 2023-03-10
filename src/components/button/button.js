import "./button.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Button(props) {
  const { text, onClick } = props;

  return (
    <button className="button-reusable" onClick={onClick}>
      <span>{text}</span>
      <IoIosArrowForward className="button-reusable-arrow" />
    </button>
  );
}
