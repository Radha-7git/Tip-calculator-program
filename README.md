# Tip-calculator-program
# Tip Calculator Web App

## Overview
This is a simple and interactive Tip Calculator web application. It helps users calculate the tip amount and the total amount per person based on the bill amount, the number of people, and the selected tip percentage.

---

## Features
- Calculate the tip amount per person.
- Calculate the total amount per person (including tip).
- Input validation for bill, number of people, and custom tip percentage.
- Buttons for quick tip percentage selection (e.g., 5%, 10%, 15%, etc.).
- Custom tip percentage input field.
- Reset functionality to clear all inputs and reset the app to its default state.

---

## How to Use
1. **Bill Amount**: Enter the total bill amount in the input field.
2. **Number of People**: Specify the number of people splitting the bill.
3. **Tip Percentage**:
    - Choose from predefined tip percentage buttons.
    - Or enter a custom tip percentage in the custom field.
4. **Results**:
    - The app will calculate and display:
        - Tip Amount per Person.
        - Total Amount per Person.
5. **Reset**: Click the "Reset" button to clear all inputs and start over.

---

## Validations
- **Bill Amount**: Accepts up to 10 digits.
- **Number of People**: Limited to 2 digits. Shows a warning if set to 0.
- **Custom Tip**: Accepts up to 2 digits.
- Tip cannot be negative.
- Proper border highlights and warning messages for invalid inputs.

---

## Project Structure
```plaintext
|-- index.html       # HTML structure for the application.
|-- style.css        # Stylesheet for design and layout.
|-- script.js        # JavaScript logic for calculations and interactivity.
```

---

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the user interface.
- **JavaScript**: For adding interactivity and performing calculations.

---

## Test Cases
### Case 1
- **Input**:
  - Bill: `$150`
  - People: `4`
  - Tip: `15%`
- **Expected Output**:
  - Tip per person: `$5.63`
  - Total per person: `$43.13`

### Case 2
- **Input**:
  - Bill: `$200`
  - People: `5`
  - Custom Tip: `20%`
- **Expected Output**:
  - Tip per person: `$8.00`
  - Total per person: `$48.00`

### Case 3
- **Input**:
  - Bill: `$100`
  - People: `1`
  - Tip: `10%`
- **Expected Output**:
  - Tip per person: `$10.00`
  - Total per person: `$110.00`

---

## How to Run
1. Clone this repository to your local machine:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd tip-calculator
   ```
3. Open the `index.html` file in your preferred browser.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Author
Radha-7git
