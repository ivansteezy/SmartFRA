#ifndef LOGGING_BASE_HPP
#define LOGGING_BASE_HPP

#include <QString>

#include <concepts>
#include <type_traits>

namespace FRA
{
    namespace Logging
    {
        struct ILogger
        {
            virtual void LogInfoInConsole(const QString& message) = 0;
            virtual void LogErrorInConsole(const QString& message) = 0;
            virtual void LogInfoInFile(const QString& message) = 0;
            virtual void LogErrorInFile(const QString& message) = 0;
        };
    }
}

#endif
