import "./ConfirmBtn.css";
import { MdCheck } from "react-icons/md";

const ConfirmBtn = (props: any) => {
  return (
    <button className="confirm-btn" onClick={() => props.onClick(props.prompt) }>
      <MdCheck style={{ color: "white" }} />
    </button>
  );
};

export default ConfirmBtn;
