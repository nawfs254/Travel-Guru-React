import logo from '/public/resources/logo.svg'
import { IoIosSearch } from "react-icons/io";



const Navbar = () => {
    return (
        <div className='bg-transparent w-full md:w-4/5 mx-auto p-3 flex items-center justify-between flex-col lg:flex-row'>
            <img src={logo} alt="" className='w-24 md:w-32' />



            {/* dearchbar and navmenus */}
            <div className='text-white flex gap-10'>
                {/* searchbar */}
                <div className='hidden md:block'>
                    <label className="input input-bordered flex items-center gap-2 bg-transparent border-2 border-white  text-white">
                        <input type="text" className="grow focus:border-white" placeholder="Search" />
                        <IoIosSearch />
                    </label>
                </div>


                <ul className='flex items-center gap-4 lg:gap-6 justify-center flex-wrap my-4 lg:my-0'>
                    <li>News</li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <button className="btn btn-primary">Login</button>
                </ul>
            </div>


        </div>
    );
};

export default Navbar;