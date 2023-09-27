
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveDonatedCard } from "../utility/LocalStorage";

const DonationDetails = () => {
    const allData = useLoaderData();
    const data = allData?.data;
    const {id} = useParams();
    const idInt = parseInt(id);
    const requiredData = data?.find(datum => datum?.id === idInt );
    console.log(requiredData);
   const handleDonate = () => {
    saveDonatedCard(idInt);
    toast("Successfully Donated");
   }
    return (
        <div className="lg:max-w-6xl md:max-w-2xl mx-auto max-w-sm">
          <div>
          <div> <img src={requiredData?.picture} alt=""  className= " lg:h-[700px] mx-auto my-20 md:h-[400px]"/>
          </div>
          <div className="relative lg:-top-[210px] lg:w-[1130px] mx-auto bg-[#0B0B0B80]  lg:p-9 -top-36 w-[310px] md:w-[640px]"><button style={{backgroundColor: requiredData?.text_color}} className="text-white text-xl font-semibold px-6 py-4 rounded-md text-center ml-8" onClick={() => handleDonate()}>Donate {requiredData?.price}</button>  <ToastContainer /> </div>
         
          </div>
<div className="relative lg:-top-36 space-y-6">  <p className="text-4xl font-bold text-[#0B0B0B]">{requiredData?.title}</p>
           <p>{requiredData?.description}</p></div>
        </div>
    );
};

export default DonationDetails;