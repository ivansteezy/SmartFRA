#include "HttpRequestsManager.hpp"
using namespace FRA::Networking;

HttpRequestsManager::HttpRequestsManager(QObject *parent) : QObject(parent)
{
    mNetworkAcessManager = new QNetworkAccessManager(this);
    qDebug() << "CONNECTING";
    QObject::connect(mNetworkAcessManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(ManagerFinished(QNetworkReply*)));
}

void HttpRequestsManager::Post(const QString& endpoint, const QByteArray& postData)
{

}

void HttpRequestsManager::Get(const QString& endpoint)
{
    mRequest.setUrl(endpoint);
    mNetworkAcessManager->get(mRequest);
}

void HttpRequestsManager::Update(const QString& endpoint, const QByteArray& updateData)
{

}

void HttpRequestsManager::Delete(const QString& endpoint)
{

}

void HttpRequestsManager::ManagerFinished(QNetworkReply* reply)
{
    qDebug() << "IT FINISHES";
    if(reply->error())
    {
        // logger.LogErrorInFile(QString("error trying to get HTTP requests: %1").arg(reply->errorString()));
        qDebug() << "Hubo un error: ";
        qDebug() << reply->errorString();
        return;
    }
    else
    {
        mResultAsString = reply->readAll();
        // logger.LogErrorInFile(QString("result is: %1").arg(resultAsString));
        qDebug() << "El resultado es: ";
        qDebug() << mResultAsString;
        emit ResultChange();
    }
}

HttpRequestsManager::~HttpRequestsManager()
{
    delete mNetworkAcessManager;
}
