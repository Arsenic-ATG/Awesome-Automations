#include <string>

enum Time {SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, DECADE, CENTURY};

Time convert(std::string thisString)
{
    if (thisString == "SECOND") return SECOND;
    if (thisString == "MINUTE") return MINUTE;
    if (thisString == "HOUR") return HOUR;
    if (thisString == "DAY") return DAY;
    if (thisString == "WEEK") return WEEK;
    if (thisString == "MONTH") return MONTH;
    if (thisString == "YEAR") return YEAR;
    if (thisString == "DECADE") return DECADE;
    if (thisString == "CENTURY") return CENTURY;
    return NULL;
}