The Link component is a versatile UI element designed for displaying various types of links, within a web application. It offers different variants to accommodate different styles and purposes.

## Link Variants

- **Default**: This label is styled as the default link label.

- **Primary**: This label is styled as the primary link label.

- **Secondary**: This label is styled as the secondary link label.

- **Danger**: This label is styled as the danger link label.

- **Success**: This label is styled as the success link label.

- **Warning**: This label is styled as the warning link label.

## Usage

The Link component is a powerful and flexible UI element designed to accommodate a wide range of actions within a web application. Its versatility is enhanced by the following set of props:

#### 1. `label` (string)

- The text to be displayed on the link.

#### 2. `variant` (LinkVariants)

- The variant of the link, e.g., LinkVariants.DEFAULT.

#### 3. `href` (string - optional)

- The href specifies the URL of the page the link goes to.

#### 4. `target` (string - optional)

- Specifies where to open the linked document.

#### 5. `onClick` (function - optional)

- Defines the function to be executed when the link is clicked. This prop allows developers to seamlessly integrate custom behavior, making the Link component highly adaptable.

#### 6. `classNames` (string - optional)

- Offers the flexibility to apply additional custom CSS classes to the label. This prop enables developers to further customize the styling of the label component according to specific design requirements.
