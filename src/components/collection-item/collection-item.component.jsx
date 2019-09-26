import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}>

        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton>Add to Cart</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => 

export default CollectionItem;