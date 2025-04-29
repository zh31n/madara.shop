// @ts-ignore
import AnimatedNumber from 'react-animated-number';


const AnimatedCount = ({number,nulls = 3}: {number:number,nulls?:number}) => {

    return (
        <AnimatedNumber
            style={{fontSize: 40,fontWeight:'bold'}}
            value={number}
            formatValue={(n: number) => n.toFixed(nulls)}
            duration={1000}
        />
    )
};

export default AnimatedCount;