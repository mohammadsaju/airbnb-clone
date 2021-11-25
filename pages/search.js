import Footer from "../components/Footer";
import Header from "../components/Header";
import {useRouter} from 'next/router';
import {format} from 'date-fns';
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({searchResults}) => {
    const router = useRouter();
    const {location, startDate, endDate, noOfGeusts} = router.query;
    const formatedStartDate = format( new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format( new Date(endDate), "dd MMMM yy");
    const ranges = `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${ranges} | ${noOfGeusts} Guests`} />
                <main className='flex'>
                    <section className='pt-12 px-6'>
                        <p className='text-sm font-medium text-gray-600'>300+ Stays - {ranges} - for {noOfGeusts} number of Guests</p>
                        <h2 className='text-3xl font-medium text-gray-700 mb-4'>Stays in {location}</h2>
                        <div className='hidden lg:inline-flex mb-5 flex space-x-3 whitespace-nowrap'>
                            <button className='chep-btn'>Cancellation Flexiblitiy</button>
                            <button className='chep-btn'>Type of Place</button>
                            <button className='chep-btn'>Price</button>
                            <button className='chep-btn'>Rooms & bed</button>
                            <button className='chep-btn'>Room filter</button>
                        </div>

                        <div className='flex flex-col'>
                            {searchResults.map(item => (
                                <InfoCard key={item.img} data={item}/>
                            ))}
                        </div>
                    </section>

                    <section className='min-w-[600px] hidden xl:inline-flex'>
                    <Map searchResults={searchResults}/>
                    </section>
                </main>
            <Footer/>
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const response = await fetch('https://links.papareact.com/isz');
    const searchResults = await response.json();

    return {
        props:{
            searchResults,
        }
    }
}
