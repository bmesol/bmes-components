The Label component is a versatile UI element designed for displaying various types of labels, such as text or links, within a web application. It offers different variants to accommodate different styles and purposes.

## Text Variants

1. **Default text Label**: This label is styled as the default text label.

2. **Primary text Label**: This label is styled as the primary text label.

3. **Secondary text Label**: This label is styled as the secondary text label.

4. **Danger text Label**: This label is styled as the danger text label.

5. **Success text Label**: This label is styled as the success text label.

6. **Warning text Label**: This label is styled as the warning warning text label.

## Link Variants

7. **Default link Label**: This label is styled as the default link label.

8. **Primary link Label**: This label is styled as the primary link label.

9.  **Secondary link Label**: This label is styled as the secondary link label.

10. **Danger link Label**: This label is styled as the danger link label.

11. **Success link Label**: This label is styled as the success link label.

12. **Warning link Label**: This label is styled as the warning link label.

## Usage

The Card component is a powerful and flexible UI element designed to accommodate a wide range of actions within a web application. Its versatility is enhanced by the following set of props:

#### 1. `type` (string)

* The type of the label. It can be either "link" or "text".

#### 2. `label` (string)

* The text to be displayed on the label.

#### 3. `variant` (LabelVariants)

* The variant of the label, e.g., LabelVariants.DEFAULT.

#### 4. `href` (string)

* The URL to link to if the label type is "link".

#### 5. `classNames` (string - optional)

* Offers the flexibility to apply additional custom CSS classes to the label. This prop enables developers to further customize the styling of the label component according to specific design requirements.

#### 6. `target` (string - optional)

* Specifies where to open the linked document. Applicable only if the label type is "link".