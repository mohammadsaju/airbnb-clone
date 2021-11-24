import Image from 'next/image';
import {SearchIcon, GlobeAltIcon, UsersIcon, UserCircleIcon, MenuIcon} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/router';

const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('');
    const [noOfGeusts, setNoOfGeusts] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();

    const handleSelect = (e) => {
        setStartDate(e.selection.startDate);
        setEndDate(e.selection.endDate);
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const resetInput = () => {
        setSearchInput('');
    }
    const redirectSearchPge = () => {
        router.push({
            pathname: '/search',
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGeusts,
            }
        });
    }

    return (
        <header className='bg-white sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10'>
            {/* left */}
            <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                src='https://links.papareact.com/qd3'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                />
            </div>
            {/* middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input className='flex-grow outline-none bg-transparent pl-5 text-gray-600 placeholder-xs' type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder={placeholder || 'Start your search'}/>
                <SearchIcon className='hidden md:inline-flex h-8 text-white bg-red-400 p-2 rounded-full cursor-pointer mx-3'/>
            </div>
            {/* right */}
            <div className='flex items-center justify-end space-x-4'>
                <p className='hidden md:inline-flex text-gray-600 font-medium'>Become a host</p>
                <GlobeAltIcon className='h-6 text-gray-600 cursor-pointer'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer text-gray-600 hover:bg-red-400 hover:border-red-400 hover:text-white transition'>
                    <MenuIcon className='h-6 '/>
                    <UserCircleIcon className='h-6 '/>
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto pt-4'>
                    <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='flex-grow text-2xl font-medium text-gray-700 pl-5'>Number of Guests</h2>
                        <UsersIcon className='h-5 text-gray-600'/>
                        <input className='w-12 text-lg font-semibold text-red-400 pl-2 outline-none' type="number" value={noOfGeusts} onChange={(e) => setNoOfGeusts(e.target.value)} min={1}/>
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-1 font-medium text-gray-600'>Cancel</button>
                        <button onClick={redirectSearchPge} className='flex-1 font-medium text-red-400'>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
