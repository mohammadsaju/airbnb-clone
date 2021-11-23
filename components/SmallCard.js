import Image from 'next/image';

const SmallCard = ({data}) => {
    const {img, location, distance} = data;
    return (
        <div className='flex items-center space-x-4 m-2 mt-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-out'>
            {/* left */}
            <div className='relative h-16 w-16'>
                <Image src={img} layout='fill' className='rounded-lg'/>
            </div>
            {/* right */}
            <div>
                <h2 className='text-lg font-medium text'>{location}</h2>
                <h3 className='text-gray-600'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
