#include <cstdio>
#include <iostream>
#include <string>

bool CheckUnitValid(std::string thisString)
{
    bool check2 = true;
    while (check2)
    {
        std::cin >> thisString;
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

void Convert()
{

}

int main()
{
    //Declaration
    bool check1;
    bool check2;
    std::string oString;
    std::string cString;
    std::string timeString;
    long double time;
    //Processing
    std::cout << "This is the Time converter.\n";
    std::cout << "Please input the original unit of time that you want to convert.\n";
    std::cin >> oString;
    std::cout << "Please input the number amount of the original that you want to convert.\n";
    CheckNumberValid();
    std::cout << "Please input the unit of time after converted.\n";
    std::cin >> cString;


    //Output
}