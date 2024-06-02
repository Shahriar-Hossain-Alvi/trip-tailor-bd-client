import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../Utility/SectionTitle';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview/Overview';

const TourismAndTravelGuide = () => {
    return (
        <div>
            <SectionTitle heading={'Explore Bangladesh with Us'} subHeading={'Discover the beauty, plan your journey, and meet our expert guides to make your trip unforgettable'}></SectionTitle>

            <div className='my-10'>
                <Tabs
                    selectedTabClassName='text-ttSecondary bg-ttPrimary font-bold font-playfairDisplay border-ttPrimary border'
                >
                    <TabList className='flex justify-evenly font-bold mb-5 pb-2 border-ttTerTiary border-b w-full cursor-pointer'>
                        <Tab className="w-1/3 text-center py-3">Overview</Tab>
                        <Tab className="w-1/3 text-center py-3">Our Packages</Tab>
                        <Tab className="w-1/3 text-center py-3">Meet Our Guides</Tab>
                    </TabList>

                    <TabPanel>
                        <Overview></Overview>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourismAndTravelGuide;