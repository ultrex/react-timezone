# react-timezone
> Timezone Picker for React

##Demo
[Available here.](http://vahagnaharonian.github.io/react-timezone/demo/)

##Installation
Should prefer installing via NPM:

```bash 
$ npm install react-timezone
```

The UMD build can be found in `build` directory if you ever need them.

##Usage
Usage is very simple. There are the usual `value`, `defaultValue` and `onChange` props. 
Additionally passing `placeholder` to input and appending `className` to container classes.

To get the current value, you can use `value()` method.

Minimal styles are included with the build.

##Timezones
Timezones are ~~stolen~~borrowed from Google Calendar.

For now the component expects the value to be in the format of object values in `src/timezones.json`
file and that is the retured value from component. 

##Contributing

This is pretty much just an alpha version. PRs and issues are welcome.
