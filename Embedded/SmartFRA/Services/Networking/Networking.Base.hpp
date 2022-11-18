#ifndef NETWORKING_BASE_HPP
#define NETWORKING_BASE_HPP

#include <QByteArray>
#include <QString>

#include "../Core/FRACore.hpp"

namespace FRA
{
    namespace Networking
    {
        interface IHttpRequestManager : FRA::Core::IContract
        {
            FRA_DECLARE_INTERFACE(IHttpRequestManager, "ILogger");

            virtual void Post(const QString& endpoint, const QByteArray& body) = 0;
            virtual void Get(const QString& endpoint) = 0;
            virtual void Update(const QString& endpoint, const QByteArray& body) = 0;
            virtual void Delete(const QString& endpoint) = 0;
        };
        FRA_DECLARE_CLASSFACTORY(HttpRequetsManager, IHttpRequestManager);

        struct GlobalHttpRequetsManager
        {
            static void SetInstance(FRA::Core::ComPtr<IHttpRequestManager> manager);
            static IHttpRequestManager* Instance();
        };
    }
}

#endif
