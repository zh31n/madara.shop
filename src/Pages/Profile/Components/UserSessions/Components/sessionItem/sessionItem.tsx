// import s from 'sessionItem.module.scss';



interface SessionItemProps {
    deviceName: string
    ip: string
    date: string
}

const SessionItem = ({deviceName, ip, date}: SessionItemProps) => {


    const dates = new Date(date);



    return (
        <div>
            device name: {deviceName}<br/>
            ip: {ip}<br/>
            date: {dates.toLocaleDateString()}<br/>
        </div>
    );
};

export default SessionItem;