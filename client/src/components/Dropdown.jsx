import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.PureComponent {
	render() {
		return (
			<div className='dropdown-content-search'
				onFocus={this.props.onFocus}
				onBlur={this.props.onBlur}
			>
				{this.props.items.map((item, i) => {
					return <a key={i} href={'/' + this.props.hrefs[i]}>{item}</a>
				})}
			</div>
		);
	}
}

Dropdown.propTypes = {
	items: PropTypes.array,
	hrefs: PropTypes.array,

	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
}

export default Dropdown;