#include <iostream>
#include <QDir>


int main()
{
    std::string extension;

    std::cout << std::endl;
    std::cout << "*************************************************************" << std::endl;
    std::cout << "***********************   Move Alike   **********************" << std::endl;
    std::cout << "*************************************************************" << std::endl;
    std::cout << std::endl;
    std::cout << "Enter the exetnsion of files to be moved and press enter: ";
    std::cin >> extension;


    QString extnsn(extension.c_str());

    QString currDir = QDir::currentPath();

    //Creating file collecting directory
    if(!QDir(currDir + "/" + extnsn + "_Files").exists())
    {
        QDir().mkdir(currDir + "/" + extnsn + "_Files");
    }

    bool moveSuccess = false;
    QDir directory(currDir);
    QStringList files = directory.entryList(QStringList() << "*" + extnsn, QDir::Files);
    foreach(QString filename, files)
    {
        QFile file(currDir + "/" + filename);
        moveSuccess = file.rename(currDir + "/" + extnsn + "_Files/" + filename);
    }


    std::cout << std::endl;
    if(moveSuccess == true)
    {
        std::cout << "Successfully moved files !!";

    }
    else
    {
        std::cout << "Failed to move files !!";

    }
    std::cout << std::endl;
}
