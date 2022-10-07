#include "Logger.hpp"
using namespace FRA::Logging;

Logger::Logger()
{

}

void Logger::LogInfoInConsole(const QString& message)
{
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    qInfo() << QString("INFORMATION [%1]: %2").arg(dateTime).arg(message);
}

void Logger::LogErrorInConsole(const QString& message)
{
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    qCritical() << QString("ERROR [%1]: %2").arg(dateTime).arg(message);

}

void Logger::LogInfoInFile(const QString& message)
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

void Logger::LogErrorInFile(const QString& message)
{
    QFile file(LogFilePath);
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    if(file.open(QIODevice::WriteOnly | QIODevice::Append))
    {
        QTextStream stream(&file);
        auto infoMessage = QString("ERROR [%1]: %2").arg(dateTime).arg(message);
        file.write(infoMessage.toStdString().c_str());
        stream << infoMessage << '\n';
    }
    else
    {
        LogErrorInConsole("Error trying to open the logfile!");
    }
}

Logger::~Logger()
{

}
