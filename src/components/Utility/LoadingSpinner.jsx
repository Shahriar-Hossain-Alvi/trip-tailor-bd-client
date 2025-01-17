import { PacmanLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const LoadingSpinner = () => {

    return (
        <div className="sweet-loading flex items-center bg-ttPrimary min-h-screen">
            <PacmanLoader
                color={"#ff7c5b"}
                speedMultiplier={2}
                cssOverride={override}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoadingSpinner;