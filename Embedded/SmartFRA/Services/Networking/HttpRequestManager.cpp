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
    mRequest.setUrl(endpoint);
    mRequest.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
    mNetworkAcessManager->post(mRequest, postData);
}

void HttpRequestManagerImpl::Get(const QString& endpoint)
{
    mRequest.setUrl(endpoint);
    mRequest.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
    mNetworkAcessManager->get(mRequest);
}

void HttpRequestManagerImpl::Update(const QString& endpoint, const QByteArray& updateData)
{
    mRequest.setUrl(endpoint);
    mRequest.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
    mNetworkAcessManager->put(mRequest, updateData);
}

void HttpRequestManagerImpl::Delete(const QString& endpoint)
{
    mRequest.setUrl(endpoint);
    mRequest.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
    mNetworkAcessManager->deleteResource(mRequest);
}

void HttpRequestManagerImpl::ManagerFinished(QNetworkReply* reply)
{
    qDebug() << "IT FINISHES";
    if(reply->error())
    {
        Logger->LogErrorInFile(QString("error trying to get HTTP requests: %1").arg(reply->errorString()));
        qDebug() << reply->errorString();
        return;
    }
    else
    {
        mResultAsString = reply->readAll();
        Logger->LogErrorInFile(QString("result is: %1").arg(mResultAsString));
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

