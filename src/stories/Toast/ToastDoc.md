The Toast component is designed to display notifications with different variants, providing a visually informative and user-friendly way to communicate messages.

## Toast Variants

1. **Default Toast**: A simple, clean Toast styled as the default, suitable for general informational messages.

2. **Success Toast**: A Toast adorned with a success theme, perfect for signaling positive or successful operations within your application.

3. **Warning Toast**: This variant is designed for warnings or alerts, featuring attention-grabbing elements to emphasize important messages that require user attention.

4. **Danger Toast**: A Toast tailored for critical information or errors, styled with a sense of urgency as a danger, ensuring users are promptly informed about potentially impactful issues.

## Usage

Utilize these variants to customize the appearance of your Toast messages based on the nature of the information you wish to communicate. This approach ensures a consistent and intuitive user experience, enhancing the overall usability of your application. Whether it's conveying successes, warnings, or critical errors, the Toast component provides a flexible and engaging way to interact with your users.

#### 1. `variant` (ToastVariants)

* The type of the Toast. It specifies the visual variant of the Toast, such as ToastVariants.DEFAULT, ToastVariants.SUCCESS, ToastVariants.WARNING, or ToastVariants.DANGER.

#### 2. `heading` (string)

* The text to be displayed as the heading of the Toast.

#### 3. `message` (string)

* The main content or message of the Toast.

#### 4. `classNames?` (string - optional)

* Determines whether the Toast should be displayed (true) or hidden (false).

#### 5. `showToast` (boolean)

* Offers the flexibility to apply additional custom CSS classes to the label. This prop enables developers to further customize the styling of the label component according to specific design requirements.

#### 6. `onClose` (() => void)

* Specifies the callback function to be invoked when the user closes the Toast.