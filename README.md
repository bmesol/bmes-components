<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bmesolutions.in/wp-content/uploads/2021/06/Bmesol.png" width="250" alt="BM e-Solutions">

## BM e-Solutions React UI Components Library

## Installation

```
npm install @bmesol/bmes-components --save
```

Example usage

```jsx
import { Button } from "@bmesol/bmes-components";

function App() {
  const handleClick = () => {
    alert("You clicked on Primary Button");
  };
  return (
    <Button label={"My Button"} variant={"primary"} onClick={handleClick} />
  );
}
```