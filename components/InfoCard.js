import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const InfoCard = ({data}) => {
    const {img, location, title, description, star, price, total, long, lat} = data;
    return (
        <div className='flex py-7 px-4 cursor-pointer border-b first:border-t hover:shadow-lg hover:opacity-80 transition duration-200 ease-out'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image 
                src={img}
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
                />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <h3 className='text-gray-700'>{location}</h3>
                    <HeartIcon className='h-6 text-gray-600'/>
                </div>
                <h2 className='text-lg font-medium text-gray-600 mb-3'>{title}</h2>
                <p className='text-sm'>{description}</p>
                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center text-gray-500 gap-x-2'>
                        <StarIcon className='h-6 text-yellow-400'/>
                        {star}
                    </p>
                    <div>
                        <p className='text-lg font-medium text-gray-700'>{price}</p>
                        <p className='text-right'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;
