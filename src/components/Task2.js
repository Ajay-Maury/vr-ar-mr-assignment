
import Carousel from "./Carousel";
import  "./Task2.css"
import { CgClose } from 'react-icons/cg';



const DigitalInterface = () => {
  return (
    <div className='MainContainer'>
      <div className="Container">
        <div className="CloseIconContainer">
          <CgClose  />
        </div>
        <div className="Content">
          <h1 className="ContentHeader">Digital Interface</h1>
          <p className="ContentDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum illo magnam omnis dolore maiores, quam dolorem labore minima reprehenderit.</p>
          <div className="CarouselContainer">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalInterface;
