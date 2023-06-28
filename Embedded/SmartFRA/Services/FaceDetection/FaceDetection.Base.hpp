#ifndef FACEDETECTION_BASE_HPP
#define FACEDETECTION_BASE_HPP

#include "../Core/FRACore.hpp"
#include <QString>

namespace FRA
{
    namespace FaceDetection
    {
        interface IFaceDetectionManager : FRA::Core::IContract
        {
            FRA_DECLARE_INTERFACE(IFaceDetectionManager, "IFaceDetectionManager");

            virtual bool IdentifyFace() = 0;
            virtual QString GetPersonFound() const = 0;
        };
        FRA_DECLARE_CLASSFACTORY(FaceDetectionManager, IFaceDetectionManager);

        struct GlobalFaceDetectionManager
        {
            static void SetInstance(FRA::Core::ComPtr<IFaceDetectionManager> manager);
            static IFaceDetectionManager* Instance();
        };
    }
}

#endif
