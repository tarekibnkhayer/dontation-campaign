import { useNavigate, useRouteError,  } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    const error = useRouteError();
    return (
        <div className="flex justify-center items-center flex-col mt-14  gap-6">
            <h2 className="text-4xl">OOOOps!!!</h2>
            <p className="text-3xl">Error : {error.statusText || error.message} </p>
            <h3 className="text-3xl">Something Went Wrong</h3>
            <button className="btn btn-secondary" onClick={() => handleGoBack()}>Go Back</button>
        </div>
    );
};

export default ErrorPage;