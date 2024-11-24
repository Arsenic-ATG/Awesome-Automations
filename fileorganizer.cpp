#include <iostream>
#include <filesystem>
#include <map>
#include <string>

namespace fs = std::filesystem;

// Step 1: Define a map to categorize file extensions
std::map<std::string, std::string> extensionMap = {
    {".txt", "Documents"},
    {".pdf", "Documents"},
    {".docx", "Documents"},
    {".png", "Images"},
    {".jpg", "Images"},
    {".jpeg", "Images"},
    {".gif", "Images"},
    {".mp4", "Videos"},
    {".avi", "Videos"},
    {".mkv", "Videos"},
    {".mp3", "Audio"},
    {".wav", "Audio"},
    {".zip", "Archives"},
    {".tar", "Archives"},
    {".cpp", "Code"},
    {".py", "Code"},
    {".java", "Code"}
};

// Step 2: Function to categorize files based on their extension
std::string getCategory(const std::string& extension) {
    if (extensionMap.find(extension) != extensionMap.end()) {
        return extensionMap[extension];
    }
    return "Others";
}

// Step 3: Function to organize files
void organizeFiles(const std::string& path) {
    try {
        // Iterate through files in the directory
        for (const auto& entry : fs::directory_iterator(path)) {
            if (entry.is_regular_file()) {
                std::string fileExtension = entry.path().extension().string();
                std::string category = getCategory(fileExtension);
                
                // Destination directory
                std::string targetDir = path + "/" + category;
                
                // Create directory if it doesn't exist
                if (!fs::exists(targetDir)) {
                    fs::create_directory(targetDir);
                }

                // Move file to categorized folder
                std::string targetPath = targetDir + "/" + entry.path().filename().string();
                fs::rename(entry.path(), targetPath);
                
                std::cout << "Moved: " << entry.path().filename().string() 
                          << " -> " << category << "/" << entry.path().filename().string() << "\n";
            }
        }
        std::cout << "Files organized successfully!\n";
    } catch (const fs::filesystem_error& err) {
        std::cerr << "Error: " << err.what() << "\n";
    }
}

int main() {
    std::string directoryPath;

    // Get directory from user input
    std::cout << "Enter the directory path to organize: ";
    std::getline(std::cin, directoryPath);

    // Check if the directory exists
    if (!fs::exists(directoryPath) || !fs::is_directory(directoryPath)) {
        std::cerr << "Invalid directory path.\n";
        return 1;
    }

    // Organize files in the directory
    organizeFiles(directoryPath);

    return 0;
}
