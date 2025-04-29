import s from './ProductPhotos.module.scss';
import SmallPhotoItem from "../SmallPhotoItem/SmallPhotoItem.tsx";
import photo from "../../../../assets/img/photo.png";

const ProductPhotos = () => {
    return (
        <div className={s.prPhoto}>
            <div className={s.smallPhotos}>
                <SmallPhotoItem img={photo}/>
                <SmallPhotoItem img={photo}/>
                <SmallPhotoItem img={photo}/>
            </div>
            <div className={s.photoLarge}>
                <img src={photo} alt=""/>
            </div>
        </div>
    );
};

export default ProductPhotos;