import React from 'react';
import { cn } from '../../lib/utils';
import Image from 'next/image';
import { Container } from './Container';
import { Button, Input } from '../ui';
import { UserRound, ShoppingCart, CircleArrowRight } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex items-center gap-3'>
                    <Image src="/logo3.png" alt="Logo" width={35} height={35} className='w-[35] h-[35]' />
                    <div>
                        <h1 className='text-2xl font-black'>DostaPizza</h1>
                        <p className='text-sm tracking-[1] text-gray-400 leading-3'>вкуснее не будет</p>
                    </div>
                </div>
                <div>
                    <Input placeholder='Поиск...'/>
                </div>
                <div className='flex items-center gap-3'>
                    <Button variant='outline' className='flex items-center gap-1'>
                        <UserRound size={16} />
                        Войти
                    </Button>
                    <div >
                        <Button variant="default" className='group relative'>
                            <b>520 ₽</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3' />
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                                <ShoppingCart size={16} className='h-4 w-4 relative' />
                                <b>3</b>
                            </div>
                            <CircleArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
                        </Button>
                    </div>
                </div>
            </Container>
        </header >
    );
};