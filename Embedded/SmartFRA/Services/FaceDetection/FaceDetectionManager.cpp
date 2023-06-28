#include "FaceDetectionManager.hpp"
using namespace FRA::FaceDetection;

FRA_IMPLEMENT_CLASSFACTORY(FaceDetectionManager, FaceDetectionManagerImpl, IFaceDetectionManager);

FaceDetectionManagerImpl::FaceDetectionManagerImpl(QObject *parent) : QObject(parent)
{
    mProgram = "python";
    mArgs << "../../Python/f_recognition.py";
}

FaceDetectionManagerImpl::~FaceDetectionManagerImpl()
{

}

bool FaceDetectionManagerImpl::IdentifyFace()
{
    mPythonProcess.start(mProgram, mArgs);

    if(mPythonProcess.waitForStarted() && mPythonProcess.waitForFinished())
    {
        QByteArray res = mPythonProcess.readAllStandardOutput();
        QString output(res);
        SetPersonName(output);

        qDebug() << "El codgio de ejecucion fue: " << mPythonProcess.exitCode();
        qDebug() << "el string es: " << output;
        return true;
    }
    else
    {
        qDebug() << "ERROR";
        return true;
    }
}

QString FaceDetectionManagerImpl::GetPersonFound() const
{
    return mPersonName;
}

void FaceDetectionManagerImpl::SetPersonName(const QString& name)
{
    mPersonName = name;
}

QObject *FaceDetectionManagerImpl::AsQtObject()
{
    return static_cast<QObject*>(this);
}

const QMetaObject *FaceDetectionManagerImpl::MetaObject()
{
    return this->metaObject();
}
