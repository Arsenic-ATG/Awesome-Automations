#include "enum.cpp"
#include <cstdio>
#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>

long double Convert(Time unit1, Time unit2, long double a)
{
    long double arr[8] = {60, 60, 24, 7, 30/7, 12, 10, 10};
    long double temp = a;
    if (unit1 >= unit2)
    {
        for (int i = unit2; i < unit1; i++)
        {
            temp *= arr[i];
        }
        return temp;
    }
    else if (unit1 < unit2)
    {
        for (int i = unit1; i < unit2; i++)
        {
            temp /= arr[i];
        }
        return temp;
    }
}

int main()
{
    //Declaration
    bool check1 = true;
    bool check2 = true;
    std::string string1;
    std::string string2;
    Time originalUnit, convertedUnit;
    long double time;
    //Processing
    std::cout << "This is the Time converter.\n";
    while (check1)
    {
        //Ask for 1st unit of time
        std::cout << "Please input the original unit of time that you want to convert.\n";
        std::cout << "Valid inputs are: SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, DECADE, CENTURY.\n";
        std::cin >> string1;
        std::transform(string1.begin(), string1.end(),string1.begin(), 
                    [](unsigned char c) -> unsigned char { return std::toupper(c);});
        originalUnit = convert(string1);
        if (originalUnit != NONE)
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
        std::cin >> string2;
        std::transform(string2.begin(), string2.end(), string2.begin(), 
                    [](unsigned char c) -> unsigned char { return std::toupper(c);});
        convertedUnit = convert(string2);
        if (convertedUnit != NONE)
        {
            check2 = false;
        }
        else
        {
            check2 = true;
            std::cout << "You have input incorrectly. Please only input the unit of time with singular form.\n";
        }
    }
    std::cout << "Please input the original amount of time you want to convert: \n";
    std::cin >> time;
    std::cout << time << " " << string1 << " is converted to: " << Convert(originalUnit, convertedUnit, time) << " " << string2 << ".\n";

    //Output
}