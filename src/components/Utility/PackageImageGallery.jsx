import PropTypes from 'prop-types';
import { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';
import "./PackageImageGallery.css"

const PackageImageGallery = ({ spotImages }) => {
    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
            itemSelector: '.gallery__item',
            rowHeight: 180,
            lastRow: 'start',
            gutter: 2,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false,
        });
    }, []);


    return (
        <div>
            <LightGallery
                plugins={[lgZoom, lgVideo]}
                mode="lg-fade"
                pager={false}
                thumbnail={true}
                galleryId={'nature'}
                autoplayFirstVideo={false}
                elementClassNames={'gallery'}
                mobileSettings={{
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false,
                }}

            >
                {
                    spotImages.map((image, idx) => <a key={idx}
                        data-lg-size="1600-1067"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery__item"
                        data-src={image}
                    >
                        <img
                            className="img-responsive"
                            src={image}
                        />
                    </a>)
                }
            </LightGallery>
        </div>
    );
};

PackageImageGallery.propTypes = {
    spotImages: PropTypes.array
}

export default PackageImageGallery;