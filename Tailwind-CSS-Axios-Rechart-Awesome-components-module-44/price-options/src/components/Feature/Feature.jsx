import { IoMdCheckmarkCircle } from "react-icons/io";
import PropTypes from "prop-types";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <IoMdCheckmarkCircle className="text-green-500 mr-2" />
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
