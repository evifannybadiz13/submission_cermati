# WebDriverIO Automation Setup

## Prerequisites

Before running the WebDriverIO automation scripts, ensure you have the following prerequisites:

1. **Node.js**: WebDriverIO requires Node.js. Download and install it from the [Node.js official website](https://nodejs.org/). Verify installation with:

    ```bash
    node -v
    ```

2. **npm (Node Package Manager)**: npm is included with Node.js. Check if it's installed with:

    ```bash
    npm -v
    ```

3. **WebDriverIO**: Install WebDriverIO and its CLI tool by running:

    ```bash
    npm install --save-dev @wdio/cli
    ```

    After installation, initialize WebDriverIO in your project:

    ```bash
    npx wdio config
    ```

4. **Browser Drivers**: Install browser drivers for the browsers you want to test. For example, for ChromeDriver:

    ```bash
    npm install --save-dev chromedriver
    ```

5. **A Web Browser**: Ensure you have the browser installed that corresponds to the driver you are using (e.g., Google Chrome for ChromeDriver).

6. **Optional: Additional Testing Frameworks**: If you need a testing framework like Mocha, Jasmine, or Cucumber, install them as needed:

    - For Mocha:

        ```bash
        npm install --save-dev mocha
        ```

    - For Jasmine:

        ```bash
        npm install --save-dev jasmine
        ```

    - For Cucumber:

        ```bash
        npm install --save-dev @wdio/cucumber-framework
        ```

7. **Environment Variables**: Set any necessary environment variables. Use `.env` files or set variables directly in your shell.

8. **Configuration File**: Ensure your `wdio.conf.js` file is properly configured. This file defines your test settings.

## Running the Tests

Execute your WebDriverIO tests with:

```bash
npx wdio --spec .\features\*.featur
