import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../Utility/SectionTitle';
import 'react-tabs/style/react-tabs.css';
import OverViewSection from './OverViewSection/OverViewSection';
import OurPackagesSection from './OurPackagesSection/OurPackagesSection';

const TourismAndTravelGuide = () => {
    return (
        <div>
            <SectionTitle heading={'Tourism & Travel Guide'} subHeading={'Discover the beauty, plan your journey, and meet our expert guides to make your trip unforgettable'}></SectionTitle>

            <div className='my-10'>
                <Tabs
                    selectedTabClassName='text-ttSecondary bg-ttPrimary font-bold font-playfairDisplay border-ttPrimary'
                >
                    <TabList className='flex justify-evenly font-bold mb-5 pb-2 w-full cursor-pointer'>
                        <Tab className="w-1/3 text-center py-3 border border-ttPrimaryBg hover:border-ttSecondary">Overview</Tab>
                        <Tab className="w-1/3 text-center py-3 border border-ttPrimaryBg hover:border-ttSecondary">Our Packages</Tab>
                        <Tab className="w-1/3 text-center py-3 border border-ttPrimaryBg hover:border-ttSecondary">Meet Our Guides</Tab>
                    </TabList>

                    <TabPanel>
                        <OverViewSection></OverViewSection>
                    </TabPanel>
                    <TabPanel>
                        <OurPackagesSection></OurPackagesSection>
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