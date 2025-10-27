import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../Redux/store.ts";
import {getUsersSessionsThunk} from "../../../../Redux/thunkCreators/UserSessions.ts";
import SessionItem from "./Components/sessionItem/sessionItem.tsx";

interface session {
    deviceId: number
    deviceName: string
    issuedAt: string
    ip: string
}

const UserSessions = () => {

    const dispatch = useAppDispatch();
    const id = useAppSelector(state => state.auth.id);
    const sessions: session[] = useAppSelector(state => state.sessions.sessions)
    useEffect(() => {
        dispatch(getUsersSessionsThunk(id!))
    }, []);

    const sessionsMap = sessions.map(s => <SessionItem date={s.issuedAt} key={s.deviceId} ip={s.ip}
                                                       deviceName={s.deviceName}/>)
    return (
        <div>
            <h1>Sessions</h1>
            {sessionsMap}
        </div>
    );
};

export default UserSessions;