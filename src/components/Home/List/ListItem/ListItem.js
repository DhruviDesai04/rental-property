import React from 'react';
import './ListItem.css';

const ListItem = ({
    item: { coverSrc, title, price, rating, loc },
}) => {
    return (
        <div className="list-item" id="list-item">
            <div className='listItem-wrap'>
                <img src={coverSrc} alt='' />
                <header>
                    <h4>{title}</h4>
                    <span>🌟{rating}</span>
                </header>
                <footer>
                    <div className='w-100 d-flex justify-content-between align-items-center'>
                        <p><b>${price}</b></p>
                        <p>{loc}</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default ListItem;
