import React, { useContext } from 'react';
import { DataContext } from '../Hooks/dataContext';
import './PlayerToken.css'

function PlayerToken(props) {
    const { data, setData } = useContext(DataContext);

    return (
        <div className='player-token'>
            <img src={data.imgUrl} alt="" />
        </div>
    );
}

export default PlayerToken;