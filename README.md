<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bmesolutions.in/wp-content/uploads/2021/06/Bmesol.png" width="250" alt="BM e-Solutions">

# BM e-Solutions React UI Components Library

## Prerequisites

To install packages from GitHub Packages using npm, ensure that you have the following prerequisites set up:

### 1. GitHub Account and Repository

- **GitHub Account:** You need to have a GitHub account. If you don't have one, you can sign up [here](https://github.com/join).

- **GitHub Repository:** The package you want to install should be hosted in a GitHub repository. Make sure the repository is accessible and contains the necessary npm package.

### 2. Personal Access Token (PAT)

- **Generate Personal Access Token (PAT):** To authenticate npm with GitHub Packages, you need a Personal Access Token. Generate a PAT by following these steps:
    1. Go to your GitHub account settings.
    2. Navigate to **Settings > Developer settings > Personal access tokens**.
    3. Click on **Generate token**.
    4. Provide a suitable name, select the appropriate scopes (at least `read:packages` and `write:packages` for npm), and click **Generate token**.
    5. Copy the generated token. **Note:** This token is sensitive; keep it secure.

### 3. Configuring npm for GitHub Packages

- **Create `.npmrc` File:** In your project's root directory, create an `.npmrc` file (or edit if it already exists). Add the following lines, 

    ```ini
    registry=https://registry.npmjs.org/
    @bmesol:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=TOKEN
    ```

    **Note:** Replace `TOKEN` with your GitHub Personal Access Token.

## Installation

```
npm install @bmesol/bmes-components@0.0.65-beta
```

Example usage

```jsx
import { Button, ButtonVariants } from "@bmesol/bmes-components";

export const App = () => {
  const handleClick = () => {
    alert("You clicked on Primary Button");
  };
  return (
    <Button label={"My Button"} variant={ButtonVariants.PRIMARY} onClick={handleClick} />
  );
}
```
