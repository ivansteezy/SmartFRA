#include "HttpRequestsManager.hpp"
using namespace FRA::Networking;

template<FRA::Logging::ILogger Logger>
HttpRequestsManager<Logger>::HttpRequestsManager()
{

}

template<FRA::Logging::ILogger Logger>
bool HttpRequestsManager<Logger>::Post(QString endpoint, QByteArray postData)
{
    return false;
}

template<FRA::Logging::ILogger Logger>
QByteArray HttpRequestsManager<Logger>::Get(QString endpoint)
{
    return QByteArray();
}

template<FRA::Logging::ILogger Logger>
bool HttpRequestsManager<Logger>::Update(QString endpoint, QByteArray updateData)
{
    return false;
}

template<FRA::Logging::ILogger Logger>
bool HttpRequestsManager<Logger>::Delete(QString endpoint)
{
    return false;
}
