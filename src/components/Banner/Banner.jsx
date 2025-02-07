import { Link } from 'react-router-dom';
import bannerImg from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row md:flex-col px-10 lg:px-[120px] py-[80px] items-center bg-[#1313130d] rounded-xl my-8 justify-center text-center lg:text-left'>
                <div className='w-full lg:w-8/12 mb-10'>
                    <h1 className="text-[56px] font-bold mb-16">Books to freshen up your bookshelf</h1>
                    <Link to='/listed-books'><button className="btn rounded bg-[#23BE0A] text-white font-bold">View The List</button></Link>
                </div>
                <div className='w-full lg:w-4/12 flex justify-center'>
                    <img className='border-2 border-gray-300 border-dashed' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;