#include <iostream>
#include <string>
#include <map>
#include <curl/curl.h>
#include "json.hpp"



using json = nlohmann::json;

// Constants 
const std::string API_KEY = std::getenv("API");
const std::string API_URL = "https://openexchangerates.org/api/latest.json?app_id="+ API_KEY;

// Struct to store the API response
struct ApiResponse {
    std::string response;
    int httpCode;
};

// Callback function to receive API response
size_t CurlCallback(void* contents, size_t size, size_t nmemb, std::string* response) {
    size_t totalSize = size * nmemb;
    response->append((char*)contents, totalSize);
    return totalSize;
}

// Function to perform API request
ApiResponse FetchExchangeRates() {
    CURL* curl = curl_easy_init();
    ApiResponse apiResponse;
    std::string response;

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, API_URL.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, CurlCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

        CURLcode res = curl_easy_perform(curl);
        if (res == CURLE_OK) {
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &apiResponse.httpCode);
            apiResponse.response = response;
        }
        curl_easy_cleanup(curl);
    }

    return apiResponse;
}

// Function to extract exchange rates from the API response
std::map<std::string, double> GetExchangeRates(const std::string& jsonResponse) {
    std::map<std::string, double> exchangeRates;

    json data = json::parse(jsonResponse);

    if (data.contains("rates")) {
        for (const auto& [currency, rate] : data["rates"].items()) {
            double exchangeRate = rate;
            exchangeRates[currency] = exchangeRate;
        }
    }

    return exchangeRates;
}

// Function to perform currency conversion
double ConvertCurrency(double amount, double fromRate, double toRate) {
    return (amount / fromRate) * toRate;
}

int main() {
    ApiResponse apiResponse = FetchExchangeRates();

    if (apiResponse.httpCode == 200) {
        std::map<std::string, double> exchangeRates = GetExchangeRates(apiResponse.response);

        
        std::string fromCurrency;
        std::string toCurrency;
        double amount;

        std::cout << "Enter the source currency code: ";
        std::cin >> fromCurrency;
        std::cout << "Enter the target currency code: ";
        std::cin >> toCurrency;
        std::cout << "Enter the amount to convert: ";
        std::cin >> amount;

        if (exchangeRates.count(fromCurrency) && exchangeRates.count(toCurrency)) {
            double fromRate = exchangeRates[fromCurrency];
            double toRate = exchangeRates[toCurrency];

            double convertedAmount = ConvertCurrency(amount, fromRate, toRate);

            std::cout << amount << " " << fromCurrency << " is equivalent to " << convertedAmount << " " << toCurrency << std::endl;
        } else {
            std::cout << "Invalid currency codes entered." << std::endl;
        }
    }
    else {
        std::cout << "Failed to fetch exchange rates. Error code: " << apiResponse.httpCode << std::endl;
    }

    return 0;
}
