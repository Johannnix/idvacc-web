import Image from 'next/image';
import headerLogo from '~/assets/images/idvacc-logo.png';

const Logo = () => (
    <Image src={headerLogo} alt="TailNext" width={210} height={40} className='w-40 md:w-40'/>
);

export default Logo;
