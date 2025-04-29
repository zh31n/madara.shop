import s from './SmallPhotoItem.module.scss';

const SmallPhotoItem = ({img}:{img?:string}) => {
    return (
        <div className={s.smallPhotoItem}>
            <img src={img}  alt="" />
        </div>
    );
};

export default SmallPhotoItem;