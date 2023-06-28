#ifndef FACEDETECTIONMANAGERIMPL_HPP
#define FACEDETECTIONMANAGERIMPL_HPP

#include <QProcess>
#include <QStringList>
#include <QDebug>

#include "FaceDetection.Base.hpp"

namespace FRA
{
    namespace FaceDetection
    {
        class FaceDetectionManagerImpl : public QObject, public Core::Implements<IFaceDetectionManager, FRA::Core::IQtObjectSupport>
        {
            Q_OBJECT;

        public:
            explicit FaceDetectionManagerImpl(QObject* parent = 0);
            virtual ~FaceDetectionManagerImpl();

        public:
            virtual bool IdentifyFace() override;
            virtual QString GetPersonFound() const override;

            virtual QObject* AsQtObject() override;
            virtual const QMetaObject* MetaObject() override;

        private:
            void SetPersonName(const QString& name);

        private:
            QString mProgram;
            QStringList mArgs;
            QProcess mPythonProcess;
            QString mPersonName;
        };
    }
}

#endif
