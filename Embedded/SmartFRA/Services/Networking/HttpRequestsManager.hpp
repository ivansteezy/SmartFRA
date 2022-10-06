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
            HttpRequestsManager(){}

        public:
            bool Post(QString endpoint, QByteArray postData)
            {
                logger.LogInfoInFile("Making a post!");
                return true;
            }

            QByteArray Get(QString endpoint)
            {
                return QByteArray();
            }

            bool Update(QString endpoint, QByteArray updateData)
            {
                return false;
            }

            bool Delete(QString endpoint)
            {
                return false;
            }

        private:
            Logger logger;
        };
    }
}

#endif
