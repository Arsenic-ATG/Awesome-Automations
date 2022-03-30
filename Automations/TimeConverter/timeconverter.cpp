#include "enum.cpp"
#include <cstdio>
#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>

// bool CheckNumberValid()
// {
//     long double timeString;

//     std::cin >> timeString;
//     return true;
//     // if (std::cin.fail())
//     // {
//     //     return false;
//     // }
//     // else
//     // {
//     //     return true;
//     // }
// }

long double Convert(Time unit1, Time unit2)
{
    std::cout << unit1 << "\n";
    std::cout << unit2 << "\n";
}

int main()
{
    //Declaration
    bool check1 = true;
    bool check2 = true;
    bool check3 = true;
    std::string originalUnit;
    std::string convertedUnit;
    Time string1, string2;
    long double time;
    //Processing
    std::cout << "This is the Time converter.\n";
    while (check1)
    {
        //Ask for 1st unit of time
        std::cout << "Please input the original unit of time that you want to convert.\n";
        std::cout << "Valid inputs are: SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, DECADE, CENTURY.\n";
        std::cin >> originalUnit;
        std::transform(originalUnit.begin(), originalUnit.end(),originalUnit.begin(), 
                    [](unsigned char c) -> unsigned char { return std::toupper(c);});
        string1 = convert(originalUnit);
        if (string1 != NONE)
        {
            check1 = false;
        }
        else
        {
            check1 = true;
            std::cout << "You have input incorrectly. Please only input the unit of time with singular form.\n";
        }
    }
    while (check2)
    {
        //Ask for 2nd unit of time
        std::cout << "Please input the converted unit of time that you want to convert.\n";
        std::cout << "Valid inputs are: SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, DECADE, CENTURY.\n";
        std::cin >> convertedUnit;
        std::transform(convertedUnit.begin(), convertedUnit.end(), convertedUnit.begin(), 
                    [](unsigned char c) -> unsigned char { return std::toupper(c);});
        string2 = convert(convertedUnit);
        if (string2 != NONE)
        {
            check2 = false;
        }
        else
        {
            check2 = true;
            std::cout << "You have input incorrectly. Please only input the unit of time with singular form.\n";
        }
    }
    std::cout << "Please input the amount of time you want to convert\n";
    Convert(string1, string2);

    //Output
}