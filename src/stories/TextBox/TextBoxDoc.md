The TextBox component represents an input field for text entry.

## Usage

The TextBox component is used to collect textual input from users within forms or interfaces.

### Props

#### `label` (string, optional)

* The label prop provides a label or title for the TextBox component, describing the input field's purpose or expected content.

#### `placeholder` (string, optional)

* The placeholder prop defines placeholder text displayed within the input field when it is empty, offering guidance or context to users about the expected input.

#### `regex` (string, optional)

* The regex prop allows setting a regular expression for input validation, restricting the accepted text pattern.

#### `length` (number, optional)

* The length prop specifies the maximum length for the text input in the TextBox component, limiting the number of characters users can enter.

#### `required` (boolean, optional)

* The required prop indicates whether the TextBox input is mandatory, enforcing users to fill in the field before submitting a form.

#### `classNames` (string, optional)

* The classNames prop enables the addition of extra CSS class names to the TextBox component for custom styling.

#### `ref` (ForwardedRef, optional)

* The ref prop facilitates ref forwarding for the input element of the TextBox component, allowing direct access to the underlying DOM element.