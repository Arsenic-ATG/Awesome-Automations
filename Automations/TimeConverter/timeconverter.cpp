#include "enum.cpp"
#include <cstdio>
#include <iostream>
#include <string>
#include <cctype>
bool CheckUnitValid(Time thisTime)
{
    switch (thisTime)
    {

    }
}

bool CheckNumberValid()
{
    bool check1 = true;
    while (check1)
    {
        std::cin >> timeString;
        if (std::cin.fail())
        {
            std::cout >> "Please input a number";
            check1 = false;
        }
    }
}


int main()
{
    //Declaration
    bool check1;
    bool check2;
    std::string oString;
    std::string cString;
    std::string timeString;
    Time string1;
    long double time;
    //Processing
    std::cout << "This is the Time converter.\n";
    while (check1)
    {
        std::cout << "Please input the original unit of time that you want to convert.\n";
        std::cout << "Valid inputs are: SECOND, MINUTE, DAY, WEEK, MONTH, YEAR, DECADE, CENTURY.\n";
        std::cin >> oString;
        std::transform(oString.begin(), oString.end(),oString.begin(), 
                    [](unsigned char c) -> unsigned char { return std::toupper(c);});
        string1 = convert(oString);
        if (string1 != NULL)
        {
            check1 = CheckUnitValid(string1,check1);
        }
        else
        {
            check1 = true;
        }
    }
    std::cout << "Please input the number amount of the original that you want to convert.\n";
    CheckNumberValid();
    std::cout << "Please input the unit of time after converted.\n";
    std::cin >> cString;


    //Output
}