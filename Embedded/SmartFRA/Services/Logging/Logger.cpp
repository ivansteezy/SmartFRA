#include "Logger.hpp"
using namespace FRA::Logging;

Logger::Logger()
{

}

void Logger::LogInfoInConsole(QString message)
{
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    qInfo() << QString("INFORMATION [%1]: %2").arg(dateTime).arg(message);
}

void Logger::LogErrorInConsole(QString message)
{
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    qCritical() << QString("ERROR [%1]: %2").arg(dateTime).arg(message);

}

void Logger::LogInfoInFile(QString message)
{
    QFile file(LogFilePath);
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    if(file.open(QIODevice::ReadWrite | QIODevice::Append | QIODevice::Text))
    {
        QTextStream stream(&file);
        auto infoMessage = QString("INFORMATION [%1]: %2").arg(dateTime).arg(message);
        stream << infoMessage << '\n';
    }
    else
    {
        LogErrorInConsole("Error trying to open the logfile!");
    }
    file.close();
}

void Logger::LogErrorInFile(QString message)
{
    QFile file(LogFilePath);
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    if(file.open(QIODevice::WriteOnly | QIODevice::Append))
    {
        auto infoMessage = QString("ERROR [%1]: %2").arg(dateTime).arg(message);
        file.write(infoMessage.toStdString().c_str());
    }
    else
    {
        LogErrorInConsole("Error trying to open the logfile!");
    }
}
