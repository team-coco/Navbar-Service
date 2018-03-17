import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.PureComponent {
	render() {
		return (
			<div className='dropdown-content-search'>
				{this.props.items.map((item, i) => {
					return <a key={i}
						href={this.props.hrefs[i] ? '/' + this.props.hrefs[i] : undefined}
						onClick={this.props.onItemClick.bind(this, i)}
					>
						{item}
					</a>
				})}
			</div>
		);
	}
}

Dropdown.propTypes = {
	items: PropTypes.array,
	hrefs: PropTypes.array,
	onItemClick: PropTypes.func,
}

export default Dropdown;