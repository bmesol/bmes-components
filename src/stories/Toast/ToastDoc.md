The Toast component is designed to display notifications with different variants, providing a visually informative and user-friendly way to communicate messages.

## Toast Variants

1. **Info Toast**: A simple, clean Toast styled as the default, suitable for general informational messages.

2. **Success Toast**: A Toast adorned with a success theme, perfect for signaling positive or successful operations within your application.

3. **Warning Toast**: This variant is designed for warnings or alerts, featuring attention-grabbing elements to emphasize important messages that require user attention.

4. **Error Toast**: A Toast tailored for critical information or errors, styled with a sense of urgency as a danger, ensuring users are promptly informed about potentially impactful issues.

## Usage

To use the Toast component, you need to import it into your React application and wrap your content with the `ToastProvider`. The ToastProvider manages the state and rendering of Toast messages.

### Import

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "@bmesol/bmes-components";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ToastProvider>
        <App />
    </ToastProvider>
);
```

### Sample Toast
```typescript
import React from "react";
import { useToast } from "@bmesol/bmes-components";

const App = () => {
  const toast = useToast();
  return (
    <>
      <button onClick={() => toast.info("Message text here.", "Heading text")}>Show Info Toast</button>
    </>
  );
};
export default App;
```
**Note :** The `useToast` hook provides a convenient way to display Toast messages in your React application. It returns an object with methods for different types of Toast messages, such as success, warning, and error messages. It takes two parameters:

#### 1. `message` (string)

* The main content or message of the Toast.

#### 2. `heading` (string - optional)

* The text to be displayed as the heading of the Toast.