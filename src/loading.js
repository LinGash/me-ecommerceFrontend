import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({ loading, css }) => {
	return (
		<SyncLoader
			css={css}
			size={15}
			color={"#892121"}
			loading={loading}
			speedMultiplier={1.5}
		/>
	);
};

export default Loading;
