import s from './ProductPhotos.module.scss';

const ProductPhotos = ({path}:{path:string}) => {
    return (
        <div className={s.prPhoto}>
            {/*<div className={s.smallPhotos}>*/}
            {/*    <SmallPhotoItem img={photo}/>*/}
            {/*    <SmallPhotoItem img={photo}/>*/}
            {/*    <SmallPhotoItem img={photo}/>*/}
            {/*</div>*/}
            <div className={s.photoLarge}>
                <img src={path} alt=""/>
            </div>
        </div>
    );
};

export default ProductPhotos;