# Universal Color Translator
![Logo](documentation/images/index.png)



## Requirements
- Docker
- Latest Node

## Setup
clone the repository  
```bash
git clone https://github.com/rowinsbie/universal-color-translator.git
```
  
Navigate or open the terminal to the project directory   
```bash
cd universal-color-translator/
```
In the terminal of the project directory, run the following command to build the Docker image  
```bash
docker build -t universal-color-translator .
```
Run the Docker container  
```bash
docker run -p 8080:8080 universal-color-translator
```

Go to your browser and visit  
```bash
http://localhost:8080/
```

## Overview
Universal Color Translator is simple standalone Vue.js application that allows users to translate color names to hexadecimal. 

### Tech Stack
 - Vue3
 - Tailwind
 - jest for unit test

### Key Features
  - Translate color names to hexadecimal values
  - Lightweight and fast performance

### Usage

1. Enter a color name in the input field.
2. Press Enter or click the "Translate" button.
3. The corresponding hexadecimal value will be displayed below the input field.

### Security
- The nginx.conf file was configured to safeguard the application from unauthorized access to sensitive files, such as configuration files.

- [DOM Purify](https://github.com/cure53/DOMPurify)
was implemented to protect the application against reflected XSS(Cross-site scripting) attack.

- The automatic HTML escaping of Vue.js using `{{}}` is also utilized..

## Guide for the test
### Prerequisites
- Latest Node or v21.6.1

Navigate or open the terminal to the project directory, and run the following commands to run the test  
```bash
npm install && npm test
```

![Image Alt Text](documentation/images/test-ss.png)  
*Test result*

