#ifndef NETWORKING_BASE_HPP
#define NETWORKING_BASE_HPP

#include <QByteArray>
#include <QString>

namespace FRA
{
    namespace Networking
    {
        template <typename THttpRequestsManager>
        concept IHttpRequestsManager = requires(THttpRequestsManager manager)
        {
            { manager.Post(QString(), QByteArray())   } -> std::same_as<bool>;
            { manager.Get(QString())                  } -> std::same_as<void>;
            { manager.Update(QString(), QByteArray()) } -> std::same_as<bool>;
            { manager.Delete(QString())               } -> std::same_as<bool>;
        };
    }
}

#endif
