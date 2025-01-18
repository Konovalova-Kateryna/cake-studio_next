import { NAVIGATION } from '@/commons/constants';
import Image from 'next/image';
import NextLink from "next/link";
import logo from '../../../public/logo/LogoMin.jpg'

export const Logo = ({classNameLogo,classNameLink }) => {
    return (
        <NextLink className={classNameLink} href={`${NAVIGATION.main} `}>
            <Image className={classNameLogo} src={logo} alt="Logo"/>
        </NextLink>
    )
}