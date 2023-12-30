The TextBox component is a user interface element designed for collecting textual input in forms or interfaces.

## Usage

The TextBox component is used to collect textual input from users within forms or interfaces. It comes with various props that allow developers to customize its behavior and appearance. Let's go through each prop and understand its purpose:

#### 1. `label` (string, optional)

* The label prop provides a label or title for the TextBox component, describing the input field's purpose or expected content.

#### 2. `type` (enum, optional)

* The type prop specifies the type of input for the TextBox. It can be either TextBoxType.TEXT for regular text or TextBoxType.PASSWORD for a password input field, obscuring the entered text.

#### 3. `regex` (string, optional)

* The regex prop allows setting a regular expression for input validation, restricting the accepted text pattern.

#### 4. `length` (number, optional)

* The length prop specifies the maximum length for the text input in the TextBox component, limiting the number of characters users can enter.

#### 5. `required` (boolean, optional)

* The required prop indicates whether the TextBox input is mandatory, enforcing users to fill in the field before submitting a form.

#### 6. `placeholder` (string, optional)

* The placeholder prop defines placeholder text displayed within the input field when it is empty, offering guidance or context to users about the expected input.

#### 7. `classNames` (string, optional)

* The classNames prop enables the addition of extra CSS class names to the TextBox component for custom styling.

#### 8. `value` (string)

* The value prop represents the current value of the TextBox component, allowing control of the input's value from the parent component.

#### 9. `onChange` ((currentValue: string) => void)

* The onChange prop is a callback function triggered when the TextBox value changes. It provides the updated value as an argument to the callback function, allowing the parent component to handle changes in the TextBox value.

#### 10. `refs` (optional)

* The refs prop is an optional property that allows the assignment of a ref to the TextBox component. This ref can be used to access and interact with the TextBox component imperatively, providing a way to programmatically manipulate its behavior or retrieve information about its state."

#### 11. `onKeyDown` (optional)

* The onKeyDown prop is an optional event handler that accepts any function. It is triggered when a key is pressed down within the TextBox component. Developers can use this prop to implement custom logic or actions based on keyboard input events."