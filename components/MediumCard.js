import Image from 'next/image';

const MediumCard = ({data}) => {
    const {img, title} = data;
    return (
        <div className='cursor-pointer hover:scale-105 transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                src={img}
                layout='fill'
                className='rounded-xl'
                />
            </div>
            <h3 className='mt-3 text-xl text-gray-600'>{title}</h3>
        </div>
    )
}

export default MediumCard
