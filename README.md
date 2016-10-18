# react-timezone
> Timezone Picker for React

##Demo
[Available here.](http://vahnag.github.io/react-timezone/demo/)

##Installation
Should prefer installing via NPM:

```bash 
$ npm install react-timezone
```

The UMD builds can be found in `build` directory if you ever need them.

##Usage
Works just like every native form element with `defaultValue`, `value` and `onChange` props. The only difference here is that the `onChange` prop function will get passed the actual selected timezone instead of the browser Event object.

Additionally you can style the container element with `className` and `style` props.

Passing an object as `inputProps` prop will pass it to the underlying input. It can be used for setting `name`, `placeholder` on input or listening to input events.

To get the current value, you can use `value()` method.

Minimal styles are included with the build.

For advanced usage you might need to pass your own timezones. They can be passed via `timezones` props. The format can be found in `src/timezones.json`.

##Timezones
Timezones are ~~stolen~~borrowed from Google Calendar.

For now the component expects the value to be in the format of object values in `src/timezones.json`
file and that is the retured value from component. 

##Example
```javascript
import TimezonePicker from 'react-timezone';

export default () => (
  <TimezonePicker 
    defaultValue="Asia/Yerevan"
    onChange={timezone => console.log('New Timezone Selected:', timezone)}
    inputProps={{
      placeholder: 'Select Timezone...',
      name: 'timezone',
    }}
  />
);
```

##Contributing

This is pretty much just an alpha version. PRs and issues are welcome.
