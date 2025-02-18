#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <sstream>

using namespace std;

// Function to validate if a number is valid for a given base
bool isValidNumber(const string &num, const int base) {
    for (const char digit : num) {
        int digitValue;
        if (isdigit(digit)) {
            digitValue = digit - '0';
        } else if (isalpha(digit)){
            digitValue = toupper(digit) - 'A' + 10;
        } else {
            return false;
        }
        if (digitValue >= base) {
            return false;
        }
    }
    return true;
}

// Function to convert a number from any base (2-32) to decimal
int64_t toDecimal(const string &num, const int base) {
    int64_t value = 0;
    int64_t power = 1;

    for (int i = num.size() - 1; i >= 0; i--) {
        const char digit = num[i];
        int digitValue;

        if (isdigit(digit)) {
            digitValue = digit - '0';
        } else {
            digitValue = toupper(digit) - 'A' + 10;
        }

        value += digitValue * power;
        power *= base;
    }
    return value;
}

// Function to convert a decimal number to any base (2-32)
string fromDecimal(int64_t decimal, const int base) {
    if (decimal == 0) return "0";

    string result;
    while (decimal > 0) {
        if (const int64_t remainder = decimal % base; remainder < 10) {
            result += ('0' + remainder);
        } else {
            result += ('A' + (remainder - 10));
        }
        decimal /= base;
    }

    reverse(result.begin(), result.end());
    return result;
}

// Function to handle base conversion & UI
void convertNumberBase() {
    string number;
    int fromBase = 10;
    std::vector<int> targetBase = {2, 8, 10, 16};
    string baseInput;
    vector<int> lastUsedBases = targetBase;  // Store the last used bases

    do {
        cout << "Enter the number: ";
        cin >> number;

        cout << "Enter the base of the number (2-32) [default: " << fromBase << "]: ";
        cin.ignore();
        string inputBase;
        getline(cin, inputBase);

        if (!inputBase.empty()) {
            try {
                if (const int newBase = stoi(inputBase); newBase >= 2 && newBase <= 32) {
                    fromBase = newBase;
                } else {
                    cerr << "Error: Base must be between 2 and 32." << endl;
                    continue;
                }
            } catch ([[maybe_unused]]exception &e) {
                cerr << "Error: Invalid base input." << endl;
                continue;
            }
        }

        if (!isValidNumber(number, fromBase)) {
            cerr << "Error: The number contains invalid digits for base " << fromBase << "." << endl;
            continue;
        }

        // Check if the user inputted bases or left it empty (defaults will be used)
        targetBase.clear();
        while (targetBase.empty()) {
            cout << "Enter the bases to convert to (separated by spaces) [default: ";
            for (int base : lastUsedBases) {
                cout << base << " ";
            }
            cout << "]: ";
            getline(cin, baseInput);

            if (baseInput.empty()) {
                targetBase = lastUsedBases;  // Use last used bases if input is empty
                break;
            }

            stringstream ss(baseInput);
            string token;
            while (ss >> token) {
                try {
                    if (int base = stoi(token); base < 2 || base > 32) {
                        cerr << "Error: Base must be between 2 and 32." << endl;
                    } else {
                        targetBase.push_back(base);
                    }
                } catch ([[maybe_unused]] exception &e) {
                    cerr << "Error: Invalid input for base." << endl;
                }
            }
        }

        try {
            const int64_t decimal = toDecimal(number, fromBase);
            for (const int base : targetBase) {
                string converted = fromDecimal(decimal, base);
                cout << "Converted number in base " << base << ": " << converted << endl;
            }

            lastUsedBases = targetBase;

        } catch (const invalid_argument &e) {
            cerr << "Error: " << e.what() << endl;
        }

        cout << "Do you want to convert another number? (y/n): ";
        string input;
        getline(cin, input);
        if (!input.empty() && tolower(input[0]) == 'n') {
            break;
        }

    } while (true);
}

int main() {
    convertNumberBase();
    return 0;
}
