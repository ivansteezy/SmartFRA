#ifndef LOGGER_HPP
#define LOGGER_HPP

#include <QString>
#include <QFile>
#include <QDateTime>
#include <QDebug>
#include <QTextStream>

#include "Logging.Base.hpp"

namespace FRA
{
    namespace Logging
    {
        class Logger : public ILogger
        {
        public:
            Logger();

        public:
            virtual void LogInfoInConsole(const QString& message) override;
            virtual void LogErrorInConsole(const QString& message) override;
            virtual void LogInfoInFile(const QString& message) override;
            virtual void LogErrorInFile(const QString& message) override;

        public:
            ~Logger();

        private:
            inline static const QString LogFilePath = "../SmartFRA/Logs/logs.txt";
        };
    }
}

#endif
