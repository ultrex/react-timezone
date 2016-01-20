import './styles.styl';

import react from 'react';
import classNames from 'classnames';

import timezones from './timezones.json';

export default class TimezonePicker extends React.Component {
	constructor(props) {
		super(props);
		this.timezones = Object.keys(timezones);

		this.state = {
			open: false,
			timezones: this.timezones,
			focused: 0,
			value: this.getTimezone(props.defaultValue || props.value)
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.props.value) {
			const newValue = this.getTimezone(nextProps.value);
			this.refs.field.value = newValue || '';
			this.setState({ value: newValue });
		}
	}
	render() {
		const value = this.state.value;

		const isSelected = ! this.state.open && value;
		const isOpen = this.state.open;

		return (
			<div className={ classNames('timezone-picker', { 'timezone-picker-open': isOpen, 'timezone-picker-selected': isSelected }, this.props.className) }
				style={this.props.style}>
				<div className="timezone-picker-textfield">
					<input type="text"
						placeholder={this.props.placeholder}
						onFocus={this.handleFocus.bind(this)}
						onBlur={this.handleBlur.bind(this)}
						onChange={this.handleFilterChange.bind(this)}
						onKeyDown={this.handleKeyPress.bind(this)}
						defaultValue={value}
						ref="field" />
				</div>
				<ul className="timezone-picker-list" ref="options">
					{ this.state.timezones
							.map((zone, index) => {
								let focused = this.state.focused === index + 1;
								return (
									<li key={index} title={zone}
										onMouseDown={this.handleSelect.bind(this, index)}
										className={classNames('timezone-picker-list-item', {'timezone-picker-list-item-active': focused})}>
										{zone}
									</li>
								);
							}) }
				</ul>
			</div>
		);
	}
	getTimezone(query) {
		if (! query) return null;
		return this.timezones.find(zone => {
			return query === timezones[zone] || query === zone;
		});
	}
	filterItems(filter) {
		if (! filter.trim() === '') return () => true;
		return (zone) => {
			return (zone)
				.toLowerCase().includes(filter.toLowerCase().replace(/\s/g,''));
		};
	}
	handleFocus() {
		this.refs.field.value = '';
		this.setState({ open: true });
	}
	handleBlur() {
		this.refs.field.value = this.state.value || '';
		this.setState({ open: false });
	}
	handleFilterChange() {
		const filter = this.refs.field.value.trim();
		this.setState({
			timezones: this.timezones.filter(this.filterItems(filter)),
			focused: 0
		});
	}
	handleKeyPress(e) {
		if (e.which === 38 || e.which === 40) {
			e.preventDefault();
			let focused = this.state.focused;
			if (e.which === 38) {
				focused -= 1;
				if (focused < 1) focused = this.state.timezones.length;
			} else {
				focused += 1;
				if (focused > this.state.timezones.length) focused = 1;
			}
			this.setState({ focused });
			this.refs.options.children[focused - 1].scrollIntoView();
		} else if (this.state.focused !== 0) {
			if (e.which === 13) {
				this.handleSelect(this.state.focused - 1);
				e.target.blur();
			} else {
				this.setState({ focused: 0 })
			}
		}
	}
	handleSelect(index) {
		this.setState({
			timezones: this.timezones,
			focused: 0,
			open: false
		});

		if (this.props.onChange) {
			this.props.onChange(timezones[this.state.timezones[index]]);
		} else {
			this.refs.field.value = this.state.timezones[index];
			this.setState({ value: this.state.timezones[index] });
		}
	}
	value() {
		const currentValue = this.state.value;
		if (! currentValue) return null;

		return timezones[currentValue];
	}
}
