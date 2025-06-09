import React from 'react';
import { cn } from '../../lib/utils';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from '../ui';
import { UserRound, ShoppingCart } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex content-center justify-between py-8'>
                <div className='flex items-center gap-4'>
                    <Image src="/logo.png" alt="Logo" width={35} height={35} className='w-[35] h-[35]' />
                    <div>
                        <h1 className='text-2xl font-black'>DostaPizza</h1>
                        <p className='text-sm tracking-[1] text-gray-400 leading-3'>вкусней не будет</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <Button variant='outline' className='flex items-center gap-1'>
                        <UserRound size={16} />
                        Войти
                    </Button>
                    <div >
                        <Button variant="default" className='group relative'>
                            <b>520 ₽</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3'/>
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart size={16} className='h-4 w-4 relative'/>
                            <b>3</b>
                            </div>
                        </Button>
                    </div>
                </div>
            </Container>
        </header >
    );
};