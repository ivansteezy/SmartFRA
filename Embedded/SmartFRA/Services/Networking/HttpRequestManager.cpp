#include "HttpRequestManager.hpp"
using namespace FRA::Networking;

FRA_IMPLEMENT_CLASSFACTORY(HttpRequetsManager, HttpRequestManagerImpl, IHttpRequestManager);

HttpRequestManagerImpl::HttpRequestManagerImpl(QObject *parent) : QObject(parent)
{
    mNetworkAcessManager = new QNetworkAccessManager(this);
    qDebug() << "CONNECTING";
    QObject::connect(mNetworkAcessManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(ManagerFinished(QNetworkReply*)));
}

HttpRequestManagerImpl::~HttpRequestManagerImpl()
{
    delete mNetworkAcessManager;
}

void HttpRequestManagerImpl::Post(const QString& endpoint, const QByteArray& postData)
{

}

void HttpRequestManagerImpl::Get(const QString& endpoint)
{
    mRequest.setUrl(endpoint);
    mNetworkAcessManager->get(mRequest);
}

void HttpRequestManagerImpl::Update(const QString& endpoint, const QByteArray& updateData)
{

}

void HttpRequestManagerImpl::Delete(const QString& endpoint)
{

}

void HttpRequestManagerImpl::ManagerFinished(QNetworkReply* reply)
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

QObject *HttpRequestManagerImpl::AsQtObject()
{
    return static_cast<QObject*>(this);
}

const QMetaObject *HttpRequestManagerImpl::MetaObject()
{
    return this->metaObject();
}

