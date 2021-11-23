import Image from 'next/image';

const LargeCard = ({img, title, description, buttonText}) => {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96'>
                <Image
                src={img}
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'
                />
            </div>
            <div className='absolute top-32 left-12 space-y-3'>
                <h3 className='text-3xl text-gray-700 font-medium'>{title}</h3>
                <p className='text-xl'>{description}</p>
                <button className='bg-gray-800 text-white px-7 py-2 rounded-lg hover:bg-gray-700'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard;
