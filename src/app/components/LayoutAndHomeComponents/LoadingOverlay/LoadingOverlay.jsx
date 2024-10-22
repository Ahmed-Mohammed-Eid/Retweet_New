import dynamic from "next/dynamic";

const LoadingPageContent = dynamic(() =>
    import(
        "../LoadingPageContent/LoadingPageContent"
        )
);

const LoadingOverlay = () => {
    return (
        <div className={'overlay__loading'}>
            <LoadingPageContent/>
        </div>
    );
};

export default LoadingOverlay;
