import {ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../Redux/store.ts";

function PrivateRoute({ children }:{children: ReactNode}) {

    const user = useAppSelector(state => state.auth.email);


    // Если пользователь не аутентифицирован, перенаправляем на страницу логина
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Если пользователь аутентифицирован, показываем запрошенный компонент
    return children;
}

export default PrivateRoute;