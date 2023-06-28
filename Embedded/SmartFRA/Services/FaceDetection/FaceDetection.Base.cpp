#include "FaceDetection.Base.hpp"
using namespace FRA::FaceDetection;

FRA_IMPLEMENT_INTERFACE(IFaceDetectionManager);

static FRA::Core::ComPtr<IFaceDetectionManager> g_globalFaceDetectionManager;

void GlobalFaceDetectionManager::SetInstance(FRA::Core::ComPtr<IFaceDetectionManager> requestManager)
{
    g_globalFaceDetectionManager = requestManager;
}

IFaceDetectionManager* GlobalFaceDetectionManager::Instance()
{
    return g_globalFaceDetectionManager;
}
