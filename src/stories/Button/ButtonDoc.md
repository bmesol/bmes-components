The Button component is a versatile UI element that allows users to trigger various actions within a web application. It comes with two distinct variants: Regular and Outline, each offering different visual styles to suit different design needs.

## Regular Variant Buttons

* **Primary Button**: The primary button is styled as the main action button, emphasizing the most important action on a page.

* **Secondary Button**: The secondary button serves as an alternative action button, providing users with additional options.

* **Success Button**: The success button is styled for actions indicating success, such as form submissions.

* **Warning Button**: The warning button is designed for actions that require user attention or confirmation.

* **Danger Button**: The danger button signifies actions with potentially harmful consequences and is styled accordingly.

## Outline Variant Buttons

* **Outline Primary Button**: The outline primary button provides a subtle, outlined style for the main action, suitable for lighter backgrounds.

* **Outline Secondary Button**: The outline secondary button offers an outlined alternative action style, complementing the primary actions.

* **Outline Success Button**: The outline success button is an outlined version suitable for actions indicating success.

*  **Outline Warning Button**: The outline warning button features an outlined style, ideal for drawing attention to actions that require caution.

* **Outline Danger Button**: The outline danger button provides an outlined style for actions with potentially harmful consequences.

## Usage

The Button component is a powerful and flexible UI element designed to accommodate a wide range of actions within a web application. Its versatility is enhanced by the following set of props:

#### 1. `icon` (optional)

* An optional icon to be displayed within the button. If provided, the icon will appear before the label text.

#### 2. `label` (string)

* Specifies the text label for the button. It is recommended to keep the label concise, not exceeding 13 characters, for optimal visual presentation.

#### 3.  `variant` (ButtonVariants)

* Utilizes the ButtonVariants constants to specify the visual style of the button. Whether it's a primary, secondary, success, warning, danger, or one of the outlined variants, this prop ensures consistency in button appearance across the application.

#### 4. `onClick` (function)

* Defines the function to be executed when the button is clicked. This prop allows developers to seamlessly integrate custom behavior, making the Button component highly adaptable.

#### 5. `classNames` (string - optional)

* Offers the flexibility to apply additional custom CSS classes to the button. This prop enables developers to further customize the styling of the Button component according to specific design requirements.

#### 6. `isDisabled` (boolean - optional)

* Allows developers to control the state of the button, making it either enabled or disabled. When set to true, the button becomes unresponsive to user interactions, providing a straightforward way to manage button accessibility.