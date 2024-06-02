import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../Utility/SectionTitle';

const TourismAndTravelGuide = () => {
    return (
        <div>
            <SectionTitle heading={'Explore Bangladesh with Us'} subHeading={'Discover the beauty, plan your journey, and meet our expert guides to make your trip unforgettable'}></SectionTitle>

            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Guides</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TourismAndTravelGuide;