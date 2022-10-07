#ifndef HTTPREQUESTSMANAGER_HPP
#define HTTPREQUESTSMANAGER_HPP

#include "../Logging/Logging.Base.hpp"

#include <QByteArray>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkReply>

namespace FRA
{
    namespace Networking
    {
        template <FRA::Logging::ILogger Logger>
        class HttpRequestsManager : QObject
        {
        Q_OBJECT
        public:
            HttpRequestsManager()
            {
                networkAcessManager = new QNetworkAccessManager(this);

                QObject::connect(networkAcessManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(ManagerFinished(QNetworkReply*)));
            }

        public:
            bool Post(QString endpoint, QByteArray postData)
            {
                logger.LogInfoInFile("Making a post!");
                return true;
            }

            void Get(QString endpoint)
            {
                request.setUrl(endpoint);
                networkAcessManager->get(request);
            }

            bool Update(QString endpoint, QByteArray updateData)
            {
                return false;
            }

            bool Delete(QString endpoint)
            {
                return false;
            }

        public:
            ~HttpRequestsManager()
            {
                delete networkAcessManager;
            }

        signals:
            void ResultChange();

        private slots:
            void ManagerFinished(QNetworkReply* reply)
            {
                if(reply->error())
                {
                    // logger.LogErrorInFile(QString("error trying to get HTTP requests: %1").arg(reply->errorString()));
                    qDebug() << "Hubo un error: ";
                    qDebug() << reply->errorString();
                    return;
                }
                else
                {
                    resultAsString = reply->readAll();
                    // logger.LogErrorInFile(QString("result is: %1").arg(resultAsString));
                    qDebug() << "El resultado es: ";
                    qDebug() << resultAsString;
                    emit ResultChange();
                }
            }

        private:
            Logger logger;
            QNetworkAccessManager* networkAcessManager;
            QNetworkRequest request;
            QString resultAsString;
        };
    }
}

#endif
