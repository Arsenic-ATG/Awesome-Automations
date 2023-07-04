
# Currency Converter

The Currency Converter is a program written in C++ that automates the process of converting currencies. It uses an external library, `libcurl`, for making HTTP requests to retrieve currency exchange rates from an API.

## Features

- Supports conversion between different currencies.
- Retrieves real-time exchange rates from an API.
- Simple and easy-to-use interface.

## Prerequisites

- C++ compiler that supports C++11 or higher.
- `libcurl` library installed on your system.

## Installation

1. Clone the repository or download the source code files.

2. Ensure that `libcurl` is installed on your system. If not, you may need to install it using your system's package manager.
3. Visit [openexchangerates](https://openexchangerates.org) and create a free api plan and copy the api_id

### For Replit Users

3. Create a new Replit secret to store the API key. Follow these steps:

   - Open your Replit project.
   - On the left sidebar, click on the "Lock" icon (Secrets) located at the bottom.
   - In the Secrets panel, click on the "New secret" button.
   - Enter a name for your secret, such as `API`, in the "Name" field.
   - In the "Value" field, enter your actual API key.
   - Click on the "Add secret" button to save the secret.

4. Update the `main.cpp` file to retrieve the API key from the Replit secret:

   - Update the `const std::string API_URL` definition as follows:

     ```cpp
     const std::string API_KEY = std::getenv("API");
     const std::string API_URL = "https://openexchangerates.org/api/latest.json?app_id=" + API_KEY;
     ```

### For Visual Studio Code and Other IDE Users

3. Create a file named `.env` in the root directory of your project.

4. In the `.env` file, add the following line, replacing `YOUR_API_KEY` with your actual API key:

   ```plaintext
   API=YOUR_API_KEY
   ```

5. Save the `.env` file.

6. In your `main.cpp` file, include the `<cstdlib>` header at the top to use the `std::getenv` function.

7. Update the `const std::string API_URL` definition as follows:

   ```cpp
   const std::string API_KEY = std::getenv("API");
   const std::string API_URL = "https://openexchangerates.org/api/latest.json?app_id=" + API_KEY;
   ```

### Common Steps for All Users

8. Compile the program using your preferred C++ compiler with the following command:

   ```
   g++ main.cpp -lcurl -o currency_converter
   ```

9. Run the executable file generated after compilation:

   ```
   ./currency_converter
   ```

## Usage

1. Launch the program by running the executable file.

2. Follow the on-screen prompts to input the source currency, target currency, and the amount you wish to convert.

3. The program will make an API request to retrieve the exchange rate and calculate the converted amount.

4. The converted amount will be displayed on the screen.

5. Currency Code Of Some Countries:
   - United States Dollar (USD)
   - Euro (EUR)
   - British Pound (GBP)
   - Japanese Yen (JPY)
   -

 Canadian Dollar (CAD)
   - Australian Dollar (AUD)
   - Swiss Franc (CHF)
   - Chinese Yuan Renminbi (CNY)
   - Indian Rupee (INR)
   - Russian Ruble (RUB)
   - Brazilian Real (BRL)
   - South African Rand (ZAR)
   - Mexican Peso (MXN)
   - New Zealand Dollar (NZD)
   - Swedish Krona (SEK)

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Lisence
All the rights to the currency-converter project belongs to [https://github.com/CodeCinnamon001] (codecinnamon001)

## Acknowledgements

- The project utilizes the `libcurl` library for making HTTP requests to retrieve currency exchange rates.
- Special thanks to nlohmann for providing the JSON library used in this project (https://github.com/nlohmann/json).
