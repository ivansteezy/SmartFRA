#ifndef HTTPREQUESTSMANAGER_HPP
#define HTTPREQUESTSMANAGER_HPP

#include "../Logging/Logging.Base.hpp"

#include <QByteArray>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkReply>

#include "Networking.Base.hpp"

namespace FRA
{
    namespace Networking
    {
        class HttpRequestsManager : public QObject, public IHttpRequetsManager
        {
            Q_OBJECT

        public:
            Q_INVOKABLE explicit HttpRequestsManager(QObject* parent = nullptr);
            HttpRequestsManager(FRA::Logging::ILogger* logger);

        public:
            virtual void Post(const QString& endpoint, const QByteArray& postData) override;
            virtual void Get(const QString& endpoint) override;
            virtual void Update(const QString& endpoint, const QByteArray& updateData) override;
            virtual void Delete(const QString& endpoint) override;

        public:
            ~HttpRequestsManager();

        signals:
            void ResultChange();

        private slots:
            void ManagerFinished(QNetworkReply* reply);

        private:
            FRA::Logging::ILogger* mLogger;
            QNetworkAccessManager* mNetworkAcessManager;
            QNetworkRequest mRequest;
            QString mResultAsString;
        };
    }
}

#endif
