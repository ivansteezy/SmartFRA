#include "Networking.Base.hpp"
using namespace FRA::Networking;

FRA_IMPLEMENT_INTERFACE(IHttpRequestManager);

static FRA::Core::ComPtr<IHttpRequestManager> g_globalHttpRequestManager;

void GlobalHttpRequetsManager::SetInstance(FRA::Core::ComPtr<IHttpRequestManager> requestManager)
{
    g_globalHttpRequestManager = requestManager;
}

IHttpRequestManager* GlobalHttpRequetsManager::Instance()
{
    return g_globalHttpRequestManager;
}
