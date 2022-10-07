#include "Logging.Base.hpp"
using namespace FRA::Logging;

FRA_IMPLEMENT_INTERFACE(ILogger);

static FRA::Core::ComPtr<ILogger> g_globalLogger;

void GlobalLogger::SetInstance(FRA::Core::ComPtr<ILogger> logger)
{
    g_globalLogger = logger;
}

ILogger* GlobalLogger::Instace()
{
    return g_globalLogger;
}
