
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer className='bg-[#111315] text-white mt-10'>

            <div className='flex flex-col md:flex-row justify-between gap-8 p-8'>

                <div className='md:w-1/4'>
                    <h2 className='text-3xl font-bold text-orange-500 mb-2'>
                        MACK
                    </h2>

                    <h3 className='text-sm font-bold mb-4'>
                        DETAILING STUDIO
                    </h3>

                    <p className='text-gray-300 mb-4'>
                        Premium car & bike detailing studio in Padi, Chennai.
                        We care for your vehicle like it's our own.
                    </p>

                    <div className='flex gap-4'>
                        <a href="#" className='border p-2 hover:bg-orange-500'>IG</a>
                        <a href="#" className='border p-2 hover:bg-orange-500'>YT</a>
                        <a href="#" className='border p-2 hover:bg-orange-500'>FB</a>
                        <a href="#" className='border p-2 hover:bg-orange-500'>LOC</a>
                    </div>
                </div>

                <div className='md:border-l md:pl-8'>
                    <h4 className='text-xl font-bold mb-4'>Quick Links</h4>

                    <div className='flex flex-col gap-2'>
                        <Link className='hover:text-orange-500' to="/">› Home</Link>
                        <Link className='hover:text-orange-500' to="/about">› About</Link>
                        <Link className='hover:text-orange-500' to="/services">› Services</Link>
                        <Link className='hover:text-orange-500' to="/gallery">› Gallery</Link>
                        <Link className='hover:text-orange-500' to="/reviews">› Reviews</Link>
                        <Link className='hover:text-orange-500' to="/contact">› Contact</Link>
                    </div>
                </div>

                <div className='md:border-l md:pl-8'>
                    <h4 className='text-xl font-bold mb-4'>Our Services</h4>

                    <div className='flex flex-col gap-2'>
                        <Link className='hover:text-orange-500' to="/">› Ceramic Coating</Link>
                        <Link className='hover:text-orange-500' to="/">› Graphene Coating</Link>
                        <Link className='hover:text-orange-500' to="/">› Paint Protection Film (PPF)</Link>
                        <Link className='hover:text-orange-500' to="/">› Paint Correction</Link>
                        <Link className='hover:text-orange-500' to="/">› Interior Detailing</Link>
                        <Link className='hover:text-orange-500' to="/">› Exterior Detailing</Link>
                    </div>
                </div>

                <div className='md:border-l md:pl-8'>
                    <h4 className='text-xl font-bold mb-4'>Get in Touch</h4>

                    <div className='flex gap-3 mb-4'>
                        <span className='text-orange-500 text-xl'>☎</span>
                        <p>+91 98765 43210</p>
                    </div>

                    <div className='flex gap-3 mb-4'>
                        <span className='text-orange-500 text-xl'>✉</span>
                        <p>info@mackdetailingstudio.in</p>
                    </div>

                    <div className='flex gap-3'>
                        <span className='text-orange-500 text-xl'>⌖</span>
                        <p>
                            66, Kuppuswamy Street,<br />
                            Balaji Nagar, Padi,<br />
                            Chennai - 600050
                        </p>
                    </div>
                </div>

            </div>

            <div className='border-t-4 border-orange-600 p-5'>

                <div className='flex flex-col md:flex-row justify-between gap-4'>

                    <p className='text-gray-300'>
                        © 2026 Mack Detailing Studio. All Rights Reserved.
                    </p>

                    <div className='flex gap-6'>
                        <Link to="/" className='hover:text-orange-500'>
                            Privacy Policy
                        </Link>

                        <Link to="/" className='hover:text-orange-500'>
                            Terms & Conditions
                        </Link>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
