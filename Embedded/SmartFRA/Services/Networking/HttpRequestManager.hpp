#ifndef HTTPREQUESTSMANAGER_HPP
#define HTTPREQUESTSMANAGER_HPP

#include <QByteArray>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkReply>

#include "../Logging/Logging.Base.hpp"
#include "Networking.Base.hpp"

namespace FRA
{
    namespace Networking
    {
        class HttpRequestManagerImpl : public QObject, public Core::Implements<IHttpRequestManager, FRA::Core::IQtObjectSupport>
        {
            Q_OBJECT;

            FRA_DEPENDENCY(Logging::ILogger*, Logger, Logging, Logger);

        public:
            explicit HttpRequestManagerImpl(QObject* parent = 0);
            virtual ~HttpRequestManagerImpl();

        public:
            virtual void Post(const QString& endpoint, const QByteArray& postData) override;
            virtual void Get(const QString& endpoint) override;
            virtual void Update(const QString& endpoint, const QByteArray& updateData) override;
            virtual void Delete(const QString& endpoint) override;

            virtual QObject* AsQtObject() override;
            virtual const QMetaObject* MetaObject() override;

        signals:
            void ResultChange();

        private slots:
            void ManagerFinished(QNetworkReply* reply);

        private:
            QNetworkAccessManager* mNetworkAcessManager;
            QNetworkRequest mRequest;
            QString mResultAsString;
        };
    }
}

#endif
