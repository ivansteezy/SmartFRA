#ifndef LOGGING_BASE_HPP
#define LOGGING_BASE_HPP

#include <QString>

#include <concepts>
#include <type_traits>

namespace FRA
{
    namespace Logging
    {
        template <typename TLogger>
        concept ILogger = requires(TLogger engine)
        {
            { engine.LogInfoInConsole(QString())             } -> std::same_as<void>;
            { engine.LogErrorInConsole(QString())            } -> std::same_as<void>;
            { engine.LogInfoInFile(QString())                } -> std::same_as<void>;
            { engine.LogErrorInFile(QString())               } -> std::same_as<void>;
        };
    }
}

#endif
