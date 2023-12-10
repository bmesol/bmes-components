The Pin component is used to represent a numeric input for entering PIN codes or passwords.

## Usage

The Pin component is typically utilized for PIN entry purposes in forms or authentication-related interfaces.

### Props

#### `label` (string, optional)

* The label prop specifies the label associated with the Pin component, providing contextual information about the purpose of the PIN input.

#### `length` (number, required)

* The length prop defines the length of the PIN input field, indicating the number of characters expected for the PIN code.

#### `required` (boolean, optional)

* The required prop indicates whether the Pin input is mandatory, enforcing users to fill in the field before submitting a form.

#### `value` (string)

* The value prop represents the current value of the Pin component, allowing control of the input's value from the parent component.

#### `onChange` ((newValue: string) => void)

* The onChange prop is a callback function triggered when the Pin input value changes. It provides the updated value as an argument to the callback function, allowing the parent component to handle changes in the Pin input value.