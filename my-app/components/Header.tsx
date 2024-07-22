import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames'; // or import clsx from 'clsx'

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps): JSX.Element => {
  return (
    <div className={classNames('header', className)}>
      <Link href='/' className='md:flex-1'>
        <Image
          src='/assets/icons/logo.svg'
          alt='logo'
          width={120}
          height={32}
          className='hidden md:block'
        />
        <Image
          src='/assets/icons/logo-icon.svg'
          alt='logo2'
          width={32}
          height={32}
          className='mr-2 md:hidden'
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
