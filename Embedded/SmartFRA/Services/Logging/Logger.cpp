#include "Logger.hpp"
using namespace FRA::Logging;

FRA_IMPLEMENT_CLASSFACTORY(Logger, LoggerImpl, ILogger);

LoggerImpl::LoggerImpl()
{

}

LoggerImpl::~LoggerImpl()
{

}


void LoggerImpl::LogInfoInConsole(const QString& message)
{
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    qInfo() << QString("INFORMATION [%1]: %2").arg(dateTime).arg(message);
}

void LoggerImpl::LogErrorInConsole(const QString& message)
{
    auto dateTime = QDateTime::currentDateTime().toString("dd.MM.yyyy hh:mm:ss");
    qCritical() << QString("ERROR [%1]: %2").arg(dateTime).arg(message);

}

void LoggerImpl::LogInfoInFile(const QString& message)
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

void LoggerImpl::LogErrorInFile(const QString& message)
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

QObject *LoggerImpl::AsQtObject()
{
    return static_cast<QObject*>(this);
}

const QMetaObject *LoggerImpl::MetaObject()
{
    return this->metaObject();
}
