import img1 from '../../../assets/Galley/gallery1.jpg'
import img2 from '../../../assets/Galley/gallery2.jpg'
import img3 from '../../../assets/Galley/gallery3.jpg'
import img4 from '../../../assets/Galley/gallery4.jpg'
import img5 from '../../../assets/Galley/gallery5.jpg'
import img6 from '../../../assets/Galley/gallery6.jpg'
const Gallary = () => {
  return (
    <div className="mt-16">
      <div className="text-center  text-stone-700 ">
        <h1 className="text-5xl font-bold ">Our Gallery</h1>
        <p className="text-xl font-semibold pt-2 text-stone-400  ">
        Only those teachers who really love children and have vast <br /> experience work for us.
        </p>
      </div>
      <div className='flex items-center mt-6 mb-8 '>
        <img className='w-1/6' src={img1} alt="" />
        <img className='w-1/6' src={img2} alt="" />
        <img  className='w-1/6'src={img3} alt="" />
        <img className='w-1/6'src={img4} alt="" />
        <img className='w-1/6'src={img5} alt="" />
        <img className='w-1/6' src={img6} alt="" />
      </div>
    </div>
  );
};

export default Gallary;
