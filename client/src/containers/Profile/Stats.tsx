import React from 'react'
import Points from './StatsComponents/Points'
import HonorBreakdown from './StatsComponents/HonorBreakdown'
import Languages from './StatsComponents/Languages';
import Community from './StatsComponents/Community';
interface StatsProps {
}

const Stats: React.FC<StatsProps> = (props) => {
    return (
        <div className='stats'>
            <Points/>
            <HonorBreakdown/>
            <Languages />
            <Community />
            <Languages/>
            <RankBreakdown/> */}

        </div>
        )
}
export default  Stats