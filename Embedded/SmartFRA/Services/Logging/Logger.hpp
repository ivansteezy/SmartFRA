#ifndef LOGGER_HPP
#define LOGGER_HPP

#include <QString>
#include <QFile>
#include <QDateTime>
#include <QDebug>
#include <QTextStream>

namespace FRA
{
    namespace Logging
    {
        class Logger
        {
        public:
            Logger();

        // Interface methods
        public:
            void LogInfoInConsole(QString message);
            void LogErrorInConsole(QString message);
            void LogInfoInFile(QString message);
            void LogErrorInFile(QString message);

        private:
            inline static const QString LogFilePath = "../SmartFRA/Logs/logs.txt";
        };
    }
}

#endif
