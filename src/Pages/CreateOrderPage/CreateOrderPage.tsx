import s from './CreateOrderPage.module.scss';
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {setOrderItems, setTotalPrice} from "../../Redux/Reducers/ordersReducer.ts";
import CartItem from "../Cart/components/CartItem/CartItem.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useForm} from "react-hook-form";
import {summaryCartPrice} from "../../../heplers/summaryCartPrice.ts";
import {addDays} from "date-fns";
import {clearCartThunk, createOrderThunk} from "../../Redux/thunkCreators/ordersThunks.ts";
import {useNavigate} from "react-router-dom";


interface LoginFormValues {
    name: string;
    surname: string;
    city: string;
    street: string;
    home: string;
    app: string,
    postIndex: number,
    phoneNumber: string
}

const CreateOrderPage = () => {
    const dispatch = useAppDispatch();
    const itemsCart = useAppSelector(state => state.cart.cartItems);
    const totalPrice = useAppSelector(state => state.orders.totalPrice);
    const orderItems = useAppSelector(state => state.orders.orderItems)
    const userId = useAppSelector(state => state.auth.id);
    const statusCode = useAppSelector(state => state.orders.statusCode);
    const navigate = useNavigate();

    const [number, setNumber] = useState<string>('+7');
    const baseUrl = 'http://localhost:3003';
    useEffect(() => {
        const totalsSum = summaryCartPrice(itemsCart)
        dispatch(setOrderItems(itemsCart))
        dispatch(setTotalPrice(totalsSum))
    }, [itemsCart, totalPrice]);


    const {
        register,
        handleSubmit,
        formState,
    } = useForm<LoginFormValues>({
        mode: 'onTouched',
        defaultValues: { // Начальные значения (опционально)
            app: '', city: '', home: '',
            name: '', phoneNumber: '', street: '', surname: ''
        }// Валидация при потер,е фокуса
    });
    const onSubmitCreateOrder = () => {

        const currentDate = new Date();
        const orderData = {
            userId: userId!,
            items: orderItems,
            // @ts-ignore
            fullName: formState.values.name + formState.values.surname,
            // @ts-ignore
            tel: number,
            // @ts-ignore
            address: `${formState.values.city},${formState.values.street},${formState.values.home},${formState.values.app},${formState.values.postIndex}`,
            dateDelivery: addDays(currentDate, 15).toString(),
            price: totalPrice.toString(),
        }
        dispatch(createOrderThunk(orderData))
        dispatch(clearCartThunk(userId!))
    }

    useEffect(() => {
        if (statusCode === 200) {
            navigate("/profile/orders")
        }
    }, [statusCode]);


    return (
        <div className={'container'}>
            <div className={s.cont}>
                <form onSubmit={handleSubmit(onSubmitCreateOrder)}>
                    <div className={s.userInfo}>
                        <div className={s.inputCont}>
                            <label>Name</label>
                            <input aria-label={'name'}
                                   type="text" className={s.inp} placeholder={'Enter your name'}
                                   {...register('name', {
                                       required: 'Please, enter your name',
                                       minLength: {
                                           value: 2,
                                           message: 'minimal 2 symbols for name'
                                       },
                                       maxLength: {
                                           value: 20,
                                           message: 'max 20 symbols for name'
                                       }
                                   })}
                            />
                        </div>
                        <div className={s.inputCont}>
                            <label>Surname</label>
                            <input aria-label={'surname'} className={s.inp} placeholder={'Enter your surname'}
                                   {...register('surname', {
                                       required: 'Please, enter your surname',
                                       minLength: {
                                           value: 2,
                                           message: 'minimal 2 symbols for surname'
                                       },
                                       maxLength: {
                                           value: 20,
                                           message: 'max 20 symbols for surname'
                                       }
                                   })}
                            />
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.inputCont}>
                            <label>City</label>
                            <input className={s.inp} placeholder={'Enter your city'} aria-label={'city'}

                                   {...register('city', {
                                       required: 'Please, enter your city',
                                       minLength: {
                                           value: 2,
                                           message: 'minimal 2 symbols for city'
                                       },
                                       maxLength: {
                                           value: 20,
                                           message: 'max 20 symbols for city'
                                       }
                                   })}
                            />
                        </div>
                        <div className={s.inputCont}>
                            <label>Street</label>
                            <input className={s.inp} placeholder={'Enter your street'} aria-label={'street'}
                                   {...register('street', {
                                       required: 'Please, enter your street',
                                       minLength: {
                                           value: 2,
                                           message: 'minimal 2 symbols for street'
                                       },
                                       maxLength: {
                                           value: 20,
                                           message: 'max 20 symbols for street'
                                       }
                                   })}
                            />
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.inputCont}>
                            <label>Home</label>
                            <input className={s.inp} placeholder={'Enter your home'} aria-label={'home'}
                                   {...register('home', {
                                       required: 'Please, enter your home',
                                       minLength: {
                                           value: 1,
                                           message: 'minimal 1 symbol for home'
                                       },
                                       maxLength: {
                                           value: 5,
                                           message: 'max 5 symbols for home'
                                       }
                                   })}

                            />
                        </div>
                        <div className={s.inputCont}>
                            <label>Apartment/Office</label>
                            <input aria-label={'app'} className={s.inp} placeholder={'Enter your apartment/office'}
                                   {...register('app', {
                                       required: 'Please, enter your apartment',
                                       minLength: {
                                           value: 1,
                                           message: 'minimal 1 symbol for apartment'
                                       },
                                       maxLength: {
                                           value: 5,
                                           message: 'max 5 symbols for apartment'
                                       }
                                   })}
                            />
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.inputCont}>
                            <label>Post index</label>
                            <input className={s.inp} type={'number'} placeholder={'Enter your post index'}
                                   aria-label={'postIndex'}
                                   {...register('postIndex', {
                                       required: 'Please, enter your post index',
                                       minLength: {
                                           value: 6,
                                           message: 'minimal 6 symbol for post index'
                                       },
                                       maxLength: {
                                           value: 6,
                                           message: 'max 6 symbols for post index'
                                       }
                                   })}
                            />
                        </div>
                        <div className={s.inputCont}>
                            <label>Phone Number</label>
                            <input className={s.inp} placeholder={'Enter your phone number'} value={number}
                                   onChange={(e: any) => setNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div style={{marginBottom: '1rem', marginTop: '1rem', marginLeft: '1rem', color: 'red'}}>
                        {/*@ts-ignore*/}
                        {formState.errors.app?.message || formState.errors.postIndex?.message ||
                            formState.errors.city?.message || formState.errors.home?.message ||
                            formState.errors.phoneNumber?.message || formState.errors.street?.message ||
                            formState.errors.name?.message || formState.errors.postIndex?.message
                            || formState.errors.surname?.message}
                    </div>
                    <div className={s.cartItems}>
                        {orderItems.map((i, index) => <CartItem key={index} count={i.count}
                                                                name={i.name} photo={baseUrl + i.photo} price={i.price}
                                                                productId={i.productId} size={i.size} userId={i.userId}
                                                                hideDel={true} hideCount={true}/>)
                        }
                    </div>
                    <h1 style={{marginBottom: '1rem', marginTop: '1rem'}}> Total price : {totalPrice}$ </h1>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <BlackButton text={'Buy'} onClick={onSubmitCreateOrder}/>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CreateOrderPage;
