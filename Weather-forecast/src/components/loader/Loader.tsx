import { ClipLoader } from "react-spinners";

const override: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "block",
};

export const Loader: React.FC = () => {
  return (
    <div>
      <ClipLoader cssOverride={override} />
    </div>
  );
};
