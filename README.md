# LogoMaker-SVG

This Node.js script empowers you to effortlessly craft personalized logos by seamlessly combining text and geometric shapes. Elevate your branding or add a touch of creativity to your projects with this simple yet versatile logo creator.

[Video on how to use this app](https://drive.google.com/file/d/1-Qpfpxih7ndAaLrK7auVvcOjDcCzz5m2/view?usp=sharing)

![alt text](https://github.com/chappzach24/LogoMaker-SVG/blob/main/lib/Photos/Screenshot%202024-01-29%20182021.png)
![alt text](https://github.com/chappzach24/LogoMaker-SVG/blob/main/lib/Photos/Screenshot%202024-01-29%20182145.png)
![alt text](https://github.com/chappzach24/LogoMaker-SVG/blob/main/lib/Photos/Screenshot%202024-01-29%20182319.png)

[![NPM](https://nodei.co/npm/electron-download.png?downloads=true)](https://www.npmjs.com/package/electron-download)  

## Usage

1. Clone the repository:

    ```bash
    git clone git@github.com:chappzach24/LogoMaker-SVG.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-logoMaker
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the script:

    ```bash
    node index.js
    ```

5. Follow the prompts to customize your logo.

6. The generated logo will be saved as `logo.svg` in the project directory.

## Requirements

- Node.js

- npm 

### Text

- Enter three characters for the logo text when prompted.

### Text Color

- Specify the color you want for the text when prompted.

### Shape

- Choose a shape from the given options: Circle, Triangle, Square.

### Shape Color

- Specify the color you want for the selected shape.

## Validation

- The script validates that the text input has exactly three letters.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer) - For interactive command-line user interfaces.
- [fs](https://nodejs.org/api/fs.html) - For file system operations.

## Contributing

Feel free to contribute to enhance the functionality or fix any issues. Create a pull request, and we'll be happy to review it.

## License

This project is licensed under the [MIT License](LICENSE).




