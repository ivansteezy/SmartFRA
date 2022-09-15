#ifndef HTTPREQUESTSMANAGER_HPP
#define HTTPREQUESTSMANAGER_HPP

#include "../Logging/Logging.Base.hpp"

#include <QByteArray>

namespace FRA
{
    namespace Networking
    {
        template <FRA::Logging::ILogger Logger>
        class HttpRequestsManager
        {
        public:
            HttpRequestsManager();

        public:
            bool Post(QString endpoint, QByteArray postData);
            QByteArray Get(QString endpoint);
            bool Update(QString endpoint, QByteArray updateData);
            bool Delete(QString endpoint);

        private:
            Logger logger;
        };
    }
}

#endif
