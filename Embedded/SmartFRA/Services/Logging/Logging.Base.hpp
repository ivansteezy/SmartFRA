#ifndef LOGGING_BASE_HPP
#define LOGGING_BASE_HPP

#include <QString>

#include "../Core/FRACore.hpp"

namespace FRA
{
    namespace Logging
    {
        interface ILogger : FRA::Core::IContract
        {
            FRA_DECLARE_INTERFACE(ILogger, "ILogger");

            virtual void LogInfoInConsole(const QString& message) = 0;
            virtual void LogErrorInConsole(const QString& message) = 0;
            virtual void LogInfoInFile(const QString& message) = 0;
            virtual void LogErrorInFile(const QString& message) = 0;
        };
        FRA_DECLARE_CLASSFACTORY(Logger, ILogger);

        struct GlobalLogger
        {
            static void SetInstance(FRA::Core::ComPtr<ILogger> logger);
            static ILogger* Instance();
        };
    }
}

#endif
