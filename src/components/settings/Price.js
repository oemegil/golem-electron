import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'

const mapStateToProps = state => ({
    providerMinPrice: state.price.providerMinPrice,
    requestorMaxPrice: state.price.requestorMaxPrice
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


export class Price extends React.Component {

    constructor(props) {
        super(props);
    }

    _handleMinPriceChange(evt) {
        this.props.actions.setProviderMinPrice(evt.target.value)
    }

    _handleMaxPriceChange(evt) {
        this.props.actions.setRequestorMaxPrice(evt.target.value)
    }

    render() {
        const {providerMinPrice, requestorMaxPrice} = this.props
        return (
            <div className="content__price">
                <div className="section__price">
                    <span>Provider Minimum</span>
                    <input type="number" value={providerMinPrice} onChange={::this._handleMinPriceChange} aria-label="Provider minimum price"/>
                    <span>GNT per hour</span>
                </div>
                <div className="section__price">
                    <span>Requestor Maximum</span>
                    <input type="number" value={requestorMaxPrice} onChange={::this._handleMaxPriceChange} aria-label="Requestor maximum price"/>
                    <span>GNT per hour</span>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Price)