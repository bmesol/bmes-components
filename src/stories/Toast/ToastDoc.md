The Toast component is designed to display notifications with different variants, providing a visually informative and user-friendly way to communicate messages.

## Toast Variants

1. **Info Toast**: A simple, clean Toast styled as the default, suitable for general informational messages.

2. **Success Toast**: A Toast adorned with a success theme, perfect for signaling positive or successful operations within your application.

3. **Warning Toast**: This variant is designed for warnings or alerts, featuring attention-grabbing elements to emphasize important messages that require user attention.

4. **Error Toast**: A Toast tailored for critical information or errors, styled with a sense of urgency as a danger, ensuring users are promptly informed about potentially impactful issues.

## Usage

**1. To use the Toast component, you need to add `ToastProvider` in root of the application.**

```tsx
import { ToastProvider } from "@bmesol/bmes-components";
```
```tsx
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ToastProvider>
        <App />
    </ToastProvider>
);
```
**2. The `useToast` hook returns a `toast` function that you can use to display a toast. It takes two parameters :**

1. **message** (string) : The main content or message of the Toast.
1. **heading** (string - optional) : The text to be displayed as the heading of the Toast.

### Example Code

```tsx
import { useToast } from "@bmesol/bmes-components";
```
```tsx
export const App = () => {
  const toast = useToast();
  return (
      <Button
        variant={ButtonVariants.PRIMARY}
        label="Toast Info"
        onClick={() => 
          toast.info(
            "Message text here.",
            "Heading text"
          )}
      />
  );
};
```