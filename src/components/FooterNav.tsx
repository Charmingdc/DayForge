// import { PiArrowBendLeftDownBold, PiArrowBendRightUpBold } from "react-icons/pi";
import { BsTrash3 } from "react-icons/bs";
import { IoCheckmarkDoneOutline, IoAdd } from "react-icons/io5";

const FooterNav: React.FC = () => {
	return (
		<section>
			<button>
				<BsTrash3 size={24} />
			</button>

			<button>
				<IoAdd size={24} />
			</button>

			<button>
				<IoCheckmarkDoneOutline size={24} />
			</button>
		</section>
	);
};

export default FooterNav;
