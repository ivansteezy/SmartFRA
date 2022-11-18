#include "SystemInitializer.hpp"
using namespace FRA::Bootstraping;

FRA_IMPLEMENT_CLASSFACTORY(SystemInitializer, SystemInitializerImpl, ISystemInitializer);

SystemInitializerImpl::SystemInitializerImpl()
{

}

SystemInitializerImpl::~SystemInitializerImpl()
{

}

void SystemInitializerImpl::Initialize()
{
    mLogger = FRA::Logging::Logger::CreateInstance();
    FRA::Logging::GlobalLogger::SetInstance(mLogger);

    mHttpRequestManager = FRA::Networking::HttpRequetsManager::CreateInstance();
    FRA::Networking::GlobalHttpRequetsManager::SetInstance(mHttpRequestManager);
}

QObject *SystemInitializerImpl::AsQtObject()
{
    return static_cast<QObject*>(this);
}

const QMetaObject *SystemInitializerImpl::MetaObject()
{
    return this->metaObject();
}